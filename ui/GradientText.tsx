import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "native-base";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

function GradientText({ maskElement, cssGradient, ...props }) {
  return (
    <MaskedView maskElement={maskElement}>
      <LinearGradient {...fromCSS(cssGradient)}></LinearGradient>
    </MaskedView>
  );
}

export default GradientText;
