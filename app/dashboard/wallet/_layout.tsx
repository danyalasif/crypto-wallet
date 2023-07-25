import { Stack, usePathname } from "expo-router";
import { useTheme } from "native-base";
export default function WalletStack() {
  const { colors } = useTheme();
  const path = usePathname();
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          contentStyle: {
            backgroundColor:
              path === "/dashboard/wallet/modal"
                ? colors.gray[21]
                : colors.gray[24],
            opacity: path === "/dashboard/wallet/modal" ? 0.2 : 1,
          },
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          animationDuration: 2000,
          headerTransparent: true,
          contentStyle: {
            position: "absolute",
            backgroundColor: "black",
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            width: "100%",
            height: "80%",
          },
        }}
      />
    </Stack>
  );
}
