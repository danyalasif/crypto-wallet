import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import { NativeBaseProvider, extendTheme } from "native-base";

const newColorTheme = {
  primary: {
    "1": "#D8EEFF",
    "2": "#B1DBFF",
    "3": "#8AC4FF",
    "4": "#6DAFFF",
    "5": "#3D8DFF",
    "6": "#2C6DDB",
    "7": "#1E50B7",
    "8": "#133893",
  },
  green: {
    "1": "#EEFDE2",
    "2": "#D8FCC5",
    "3": "#BCF6A6",
    "4": "#A0ED8D",
    "5": "#76E268",
  },
  gray: {
    9: "#8FA2B7",
    12: "#6A84A0",
    21: "#202832",
    23: "#101419",
    24: "#080A0C",
  },
  red: {
    5: "#EA3943",
  },
  blue: {
    5: "#5F97FF",
  },
};

const fontConfig = {
  Roboto: {
    100: {
      normal: "Archivo",
      italic: "Archivo",
    },
  },
};

const fonts = {
  heading: "Archivo",
  body: "Archivo",
  mono: "Archivo",
};

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").default,
  },
};

const theme = extendTheme({ colors: newColorTheme, fontConfig, fonts });

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={theme} config={config} isSSR={false}>
        <Slot />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
