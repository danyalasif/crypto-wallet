import { Stack, usePathname, useRouter } from "expo-router";
import { ArrowBackIcon, IconButton, useTheme } from "native-base";
import { ROUTES } from "../../../helpers/consts/routes";
export default function WalletStack() {
  const { colors } = useTheme();
  const path = usePathname();
  const router = useRouter();
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.gray[24],
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "CAPS",
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor:
              path === ROUTES.TRANSACTION_DETAILS
                ? colors.gray[21]
                : colors.gray[24],
            opacity: path === ROUTES.TRANSACTION_DETAILS ? 0.2 : 1,
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
          headerShown: false,
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
      <Stack.Screen
        name="receive-transaction"
        options={{
          headerTitle: "Receive",
          contentStyle: {
            backgroundColor: colors.gray[24],
          },
          headerLeft: () => (
            <IconButton
              icon={<ArrowBackIcon />}
              onPress={() => router.back()}
              _icon={{
                color: "white",
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="send-transaction"
        options={{
          headerTitle: "Send",
          contentStyle: {
            backgroundColor: colors.gray[24],
          },
          headerLeft: () => (
            <IconButton
              icon={<ArrowBackIcon />}
              onPress={() => router.back()}
              _icon={{
                color: "white",
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}
