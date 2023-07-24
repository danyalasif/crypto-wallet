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
} from "native-base";
import { useState } from "react";
import { Animated } from "react-native";
import { CustomInput } from "./components/input";

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
  };

  return (
    <Box safeArea flex={1} p={2} backgroundColor={"gray.24"}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Import From Seed",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: colors.gray[24],
          },
          headerBackTitle: "Back",
        }}
      />
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
              p={4}
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
          <Button
            onPress={onSubmit}
            borderRadius={80}
            padding={4}
            width={"100%"}
            bgColor={"#FF56A9"}
            _text={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Import
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
}
