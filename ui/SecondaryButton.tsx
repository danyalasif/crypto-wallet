import React from "react";
import { Button, Text, Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import { Pressable } from "react-native";
import { IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";
import GradientButton from "./GradientButton";

interface SecondaryButtonProps extends IButtonProps {
  children: React.ReactNode;
}

const SecondaryButton = ({
  children,
  ...buttonProps
}: SecondaryButtonProps) => {
  return (
    <GradientButton
      cssGradient={null}
      buttonProps={{
        _text: {
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        },
        bg: "gray.21",
        py: 3,
        px: 4,
        ...buttonProps,
      }}
    >
      {children}
    </GradientButton>
  );
};

export default SecondaryButton;
