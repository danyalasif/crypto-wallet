import { Link, Stack, useRouter } from "expo-router";
import {
  Box,
  Image,
  Text,
  Button,
  InputGroup,
  FormControl,
  Input,
  VStack,
  HStack,
  Switch,
  ScrollView,
  useTheme,
  IconButton,
  ArrowBackIcon,
  useToast,
} from "native-base";
import { useState } from "react";
import { Alert, Animated } from "react-native";
import PrimaryButton from "../../ui/PrimaryButton";

import { getKeyringFromSeed, initializeApi, generatePGPKeys } from "ternoa-js";
import SecondaryButton from "../../ui/SecondaryButton";
import { useZustandStore } from "../../store";
import { ROUTES } from "../../helpers/consts/routes";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { authenticateAsync } from "expo-local-authentication";
import { EyeIcon } from "../../ui/icons/EyeIcon";

// Import the details with the seed
// Store the password and face id in secure storage
// Go to settings screen, show the user public address there with a random image
// Save the public address in store
// Show the money in account
// Show total CAPS
// Get Transactions

async function getAddress({ seed }: { seed: string }) {
  await initializeApi();

  const keyring = await getKeyringFromSeed(seed);
  const address = keyring.address;
  return address;
}
export default function ImportFromSeed() {
  const router = useRouter();
  const { colors } = useTheme();
  const { updateAddressList, setPublicKey } = useZustandStore();
  const [seedPhrase, setSeedPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [showSeed, setShowSeed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              Passwords do not match!
            </Box>
          );
        },
      });
    }
    if (seedPhrase.length < 12) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              Seed Phrase must be at least 12 characters
            </Box>
          );
        },
      });
    }
    if (password.length < 8) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              Password must be at least 8 characters
            </Box>
          );
        },
      });
    }

    try {
      setIsLoading(true);
      SecureStore.setItemAsync("USER_PASSWORD", password);
      const address = await getAddress({ seed: seedPhrase });
      SecureStore.setItemAsync("USER_SEED", seedPhrase);

      updateAddressList(address);
      router.push(ROUTES.DASHBOARD);
    } catch (e) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              An error occured while importing your account. Please try again.
            </Box>
          );
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const askForBiometrics = async () =>
    await authenticateAsync({
      disableDeviceFallback: true,
      promptMessage: "Enable biometrics login",
      cancelLabel: "Not now",
    });

  const enableBiometrics = async () => {
    const biometricsResult = await askForBiometrics();
  };

  const setFaceId = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    console.log({ savedBiometrics });
    if (!savedBiometrics) {
      return Alert.alert(
        "Biometric record not found",
        "Please verify your identity with your password"
      );
    }
    enableBiometrics();
  };

  return (
    <Box safeArea flex={1} p={2} backgroundColor={"gray.24"}>
      <ScrollView flex={1} p={2} w="90%" mx="auto">
        <VStack space={5} mt={5}>
          <FormControl isRequired>
            <FormControl.Label
              position={"absolute"}
              top={isFocused || seedPhrase.length ? 0 : 4}
              left={4}
              color={"gray.12"}
              _text={{
                fontSize: isFocused || seedPhrase.length ? "14px" : "16px",
              }}
              _astrick={{ color: "amber.100" }}
            >
              Seed Phrase
            </FormControl.Label>
            <Input
              onChangeText={setSeedPhrase}
              value={seedPhrase}
              borderRadius={16}
              color={"white"}
              fontSize={"14px"}
              p={4}
              lineHeight={"24px"}
              pt={seedPhrase.length ? 6 : 4}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              multiline
              type={showSeed ? "text" : "password"}
              rightElement={
                <IconButton
                  onPress={() => {
                    console.log("pressed");
                    setShowSeed(!showSeed);
                  }}
                  icon={
                    <EyeIcon size="lg" stroke={"white"} closed={showSeed} />
                  }
                />
              }
            />
          </FormControl>

          <FormControl isRequired>
            <Input
              onChangeText={setPassword}
              value={password}
              color={"white"}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              placeholderTextColor={"gray.12"}
              borderRadius={16}
              p={4}
              rightElement={
                <IconButton
                  onPress={() => setShowPassword(!showPassword)}
                  icon={
                    <EyeIcon size="lg" stroke={"white"} closed={showPassword} />
                  }
                />
              }
            />
            <FormControl.HelperText color={"gray.12"}>
              Must be at least 8 characters
            </FormControl.HelperText>
          </FormControl>

          <FormControl isRequired>
            <Input
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              color={"white"}
              placeholder="Confirm Password"
              placeholderTextColor={"gray.12"}
              type={showConfirmPassword ? "text" : "password"}
              borderRadius={16}
              p={4}
              rightElement={
                <IconButton
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  icon={
                    <EyeIcon
                      size="lg"
                      stroke={"white"}
                      closed={showConfirmPassword}
                    />
                  }
                />
              }
            />
          </FormControl>
          <HStack
            space={2}
            alignItems="center"
            justifyContent="space-between"
            mt={4}
          >
            <Text color="white">Sign in with Face ID?</Text>
            <Switch
              isChecked={isFaceIdEnabled}
              onToggle={setFaceId}
              onTrackColor={"primary.5"}
            />
          </HStack>
          <Text color={"white"}>
            By proceeding, you agree to these{" "}
            <Link href={"/terms"}>Term and Conditions</Link>.
          </Text>
          {password.length > 0 && confirmPassword.length > 0 ? (
            <PrimaryButton
              onPress={onSubmit}
              isLoading={isLoading}
              disabled={isLoading}
            >
              Import
            </PrimaryButton>
          ) : (
            <SecondaryButton
              disabled
              bgColor={password.length <= 0 && "gray.23"}
            >
              Import
            </SecondaryButton>
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
}
