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
} from "native-base";
import { useState } from "react";
import { Animated } from "react-native";
import PrimaryButton from "../../ui/PrimaryButton";

import { getKeyringFromSeed, initializeApi } from "ternoa-js";
import SecondaryButton from "../../ui/SecondaryButton";
import { useZustandStore } from "../../store";
import { ROUTES } from "../../helpers/consts/routes";

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
  console.log("Your fresh public address is: ", address);
  return address;
  console.log("Api Connected");
}
export default function ImportFromSeed() {
  const router = useRouter();
  const { colors } = useTheme();
  const { updateAddressList } = useZustandStore();
  const [seedPhrase, setSeedPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const address = await getAddress({ seed: seedPhrase });

    updateAddressList(address);
    setIsLoading(false);
    router.push(ROUTES.DASHBOARD);
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
            />
          </FormControl>

          <FormControl isRequired>
            <Input
              onChangeText={setPassword}
              value={password}
              color={"white"}
              placeholder="Password"
              type="password"
              placeholderTextColor={"gray.12"}
              borderRadius={16}
              p={4}
            />
          </FormControl>

          <FormControl isRequired>
            <Input
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              color={"white"}
              placeholder="Confirm Password"
              placeholderTextColor={"gray.12"}
              type="password"
              borderRadius={16}
              p={4}
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
              onToggle={setFaceIdEnabled}
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
              bgColor={password.length <= 0 && "gray.23"}
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
