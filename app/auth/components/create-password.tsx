import { useRouter } from "expo-router";
import {
  Box,
  Text,
  HStack,
  Heading,
  Progress,
  useTheme,
  Pressable,
  DeleteIcon,
  Checkbox,
  FormControl,
  Input,
  Switch,
  VStack,
  useToast,
} from "native-base";
import { useState } from "react";
import React from "react";
import SecondaryButton from "../../../ui/SecondaryButton";
import PrimaryButton from "../../../ui/PrimaryButton";
import * as SecureStore from "expo-secure-store";

export const CreatePassword = ({ onPress }) => {
  const router = useRouter();
  const { colors } = useTheme();
  const toast = useToast();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    // check passwords match

    if (password !== confirmPassword) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              Passwords don't match.
            </Box>
          );
        },
      });
    }

    if (!agreementChecked) {
      return toast.show({
        render: () => {
          return (
            <Box bg="red.5" px="2" py="1" rounded="sm" mb={5}>
              You must agree to the terms and conditions.
            </Box>
          );
        },
      });
    }

    SecureStore.setItemAsync("USER_PASSWORD", password);
    onPress();
  };

  return (
    <>
      <Box alignItems={"center"} mt={5} p={5}>
        <Text color="#70A2FF" fontSize={"16px"} fontWeight={"bold"} mb={2}>
          Create Password
        </Text>
        <Text color="white" textAlign={"center"}>
          This password will unlock your Metamask wallet only on this service
        </Text>
      </Box>

      <VStack space={5} mt={5} width={"100%"}>
        <FormControl isRequired>
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder="New Password"
            type="password"
            placeholderTextColor={"#6A84A0"}
            borderRadius={16}
            p={4}
            color={"white"}
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
            color={"white"}
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
        <HStack space={6}>
          <Checkbox
            value="I understand that DeGe cannot recover this password for me. Learn
            more"
            accessibilityLabel="Checkbox"
            _text={{
              color: "white",
            }}
            isChecked={agreementChecked}
            onChange={setAgreementChecked}
          >
            I understand that DeGe cannot recover this password for me. Learn
            more
          </Checkbox>
        </HStack>
        <PrimaryButton onPress={onSubmit}>Create Password</PrimaryButton>
      </VStack>
    </>
  );
};
