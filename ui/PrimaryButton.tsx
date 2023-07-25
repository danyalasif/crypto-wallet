import React from "react";
import { Button, Text, Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import { Pressable } from "react-native";
import { IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";
import GradientButton from "./GradientButton";

interface PrimaryButtonProps extends IButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...buttonProps }: PrimaryButtonProps) => {
  return (
    <GradientButton
      cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
      buttonProps={{
        _text: {
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        },
        ...buttonProps,
      }}
    >
      {children}
    </GradientButton>
  );
};

export default PrimaryButton;
