import { useRouter } from "expo-router";
import { Box, Text, Heading, useTheme, Image } from "native-base";
import React from "react";
import PrimaryButton from "../../../ui/PrimaryButton";
import GradientText from "../../../ui/GradientText";
import { ROUTES } from "../../../helpers/consts/routes";

export const SuccessSeedPhrase = () => {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <>
      <Image
        source={require("../../../images/success.png")}
        alt="property"
        style={{
          height: 300,
          width: 300,
        }}
      />
      <GradientText
        maskElement={
          <Heading
            color={"white"}
            fontSize={"40px"}
            fontWeight={"bold"}
            textAlign={"center"}
            bgColor={"transparent"}
          >
            Success!
          </Heading>
        }
        cssGradient="linear-gradient(135deg, #70A2FF 0%, #54F0D1 100%)"
      />
      <Heading
        color={"white"}
        fontSize={"40px"}
        fontWeight={"bold"}
        textAlign={"center"}
        bgColor={"transparent"}
      >
        Success!
      </Heading>
      <Text mt={4} color={"white"} textAlign={"center"}>
        You've successfully protected your wallet. Remember to keep your seed
        phrase safe, it's your responsibility!
      </Text>
      <Box width={"100%"} mt={"auto"}>
        <PrimaryButton onPress={() => router.push(ROUTES.DASHBOARD)}>
          Go to Dashboard
        </PrimaryButton>
      </Box>
    </>
  );
};
