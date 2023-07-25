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
// import { getKeyringFromSeed } from "ternoa-js/account";
// import { initializeApi } from "ternoa-js/blockchain";

async function getAddress({ seed }: { seed: string }) {
  // Construct
  await initializeApi();
  // Do something
  const keyring = await getKeyringFromSeed(seed);
  const address = keyring.address;
  console.log("Your fresh public address is: ", address);

  console.log("Api Connected");
}
export default function ImportFromSeed() {
  const router = useRouter();
  const { colors } = useTheme();
  const [seedPhrase, setSeedPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(false);

  const onSubmit = () => {
    console.log({ seedPhrase, password, confirmPassword });
    getAddress({ seed: seedPhrase });
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
              color={"#6A84A0"}
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
              placeholder="Password"
              type="password"
              placeholderTextColor={"#6A84A0"}
              borderRadius={16}
              p={4}
            />
          </FormControl>

          <FormControl isRequired>
            <Input
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={"#6A84A0"}
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
              onTrackColor={"#3D8DFF"}
            />
          </HStack>
          <Text color={"white"}>
            By proceeding, you agree to these{" "}
            <Link href={"/terms"}>Term and Conditions</Link>.
          </Text>
          <PrimaryButton
            onPress={onSubmit}
            bgColor={password.length <= 0 && "gray.23"}
          >
            Import
          </PrimaryButton>
        </VStack>
      </ScrollView>
    </Box>
  );
}
