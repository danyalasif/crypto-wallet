import { Stack } from "expo-router/stack";
import { SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import { NativeBaseProvider, extendTheme } from "native-base";

const newColorTheme = {
  button: {
    "Gray/21": "#202832",
  },
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={theme}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="onboarding"
        />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
