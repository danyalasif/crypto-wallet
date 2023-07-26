import { Tabs, usePathname } from "expo-router";
import React from "react";
import { useTheme } from "native-base";
import { WalletIcon } from "../../ui/icons/WalletIcon";
import { SwapIcon } from "../../ui/icons/SwapIcon";
import { SettingsIcon } from "../../ui/icons/SettingsIcon";
import { ROUTES } from "../../helpers/consts/routes";

const hideTabsScreens = [
  ROUTES.TRANSACTION_DETAILS,
  ROUTES.SEND_TRANSACTION,
  ROUTES.RECIEVE_TRANSACTION,
];

export default function DashboardTabLayout() {
  const { colors } = useTheme();
  const path = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.gray[24],
          display: hideTabsScreens.includes(path) ? "none" : "flex",
        },
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "white" },
        headerStyle: {
          backgroundColor: colors.gray[24],
          borderBottomWidth: 0,
          shadowColor: "#000",
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.gray[24],
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          title: "CAPS",
          headerShown: false,
          tabBarIconStyle: {
            height: 50,
            width: 50,
            marginRight: "auto",
            marginLeft: 50,
          },
          tabBarIcon: ({ color, focused }) => {
            return <WalletIcon fill={focused ? color : ""} text={"Wallet"} />;
          },
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIconStyle: {
            height: 50,
            width: 50,
            marginLeft: "auto",
            marginRight: "auto",
          },
          tabBarIcon: ({ color, focused }) => (
            <SwapIcon fill={focused ? color : ""} text={"Swap"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIconStyle: {
            height: 50,
            width: 50,
            marginLeft: "auto",
            marginRight: 50,
          },
          tabBarIcon: ({ color, focused }) => (
            <SettingsIcon fill={focused ? color : ""} text={"Settings"} />
          ),
        }}
      />
    </Tabs>
  );
}
