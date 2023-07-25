import { useRouter } from "expo-router";
import { Stack } from "expo-router/stack";
import { ArrowBackIcon, IconButton, useTheme } from "native-base";

export default function AuthLayout() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.gray[24],
        },
        headerTitleStyle: {
          color: "white",
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
        headerTitleAlign: "center",
      }}
      initialRouteName="wallet-setup"
    >
      <Stack.Screen
        name="wallet-setup"
        options={{ headerShown: false, headerTitle: "Create New Wallet" }}
      />
      <Stack.Screen name="create-new-wallet" />
      <Stack.Screen
        name="import-from-seed"
        options={{
          headerTitle: "Import From Seed",
        }}
      />
    </Stack>
  );
}
