import { useEffect, useState } from "react";
import { Redirect, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { initializeApi } from "ternoa-js";
import { useZustandStore } from "../store";
import { ROUTES } from "../helpers/consts/routes";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [ternoaApiInitialized, setTernoaApiInitialized] = useState(false);
  const [fontsLoaded] = useFonts({
    Archivo: require("../assets/fonts/Archivo-VariableFont_wdth-wght.ttf"),
  });
  const { addressList } = useZustandStore();

  useEffect(() => {
    if (!ternoaApiInitialized) {
      initializeApi().then(() => setTernoaApiInitialized(true));
    }

    if (fontsLoaded && ternoaApiInitialized) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, ternoaApiInitialized]);

  // Prevent rendering until the font has loaded
  if (!fontsLoaded && !ternoaApiInitialized) {
    return null;
  }

  if (addressList.length > 0) {
    return <Redirect href={ROUTES.DASHBOARD} />;
  }

  return <Redirect href={ROUTES.ONBOARDING} />;
}
