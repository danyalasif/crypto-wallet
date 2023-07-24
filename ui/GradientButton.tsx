import React from "react";
import { Button, Text, Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import { Pressable } from "react-native";
import { IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";

interface GradientButtonProps {
  children: React.ReactNode;
  cssGradient: string;
  buttonProps: IButtonProps;
}

const GradientButton = ({
  children,
  cssGradient,
  buttonProps,
}: GradientButtonProps) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      {...fromCSS(cssGradient)}
      style={{
        borderRadius: 80,
      }}
    >
      <Button
        bg={"transparent"}
        width={"100%"}
        borderRadius={80}
        _pressed={{ bgColor: "primary.1" }}
        variant="unstyled"
        {...buttonProps}
      >
        {children}
      </Button>
    </LinearGradient>
  );
};

export default GradientButton;
