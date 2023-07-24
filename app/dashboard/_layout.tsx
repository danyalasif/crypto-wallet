import { Tabs } from "expo-router";
import Wallet from "./wallet";
import React from "react";
import { SunIcon, Icon, useTheme } from "native-base";
import { WalletIcon } from "../../ui/icons/WalletIcon";
import { SwapIcon } from "../../ui/icons/SwapIcon";

export default function DashboardTabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: { height: 200, backgroundColor: colors.gray[24] },
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "white" },
        headerTintColor: "black",
        headerTransparent: true,
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => {
            return <WalletIcon fill={focused ? color : ""} text={"Wallet"} />;
          },
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIcon: ({ color, focused }) => (
            <SwapIcon fill={focused ? color : ""} text={"Swap"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <WalletIcon fill={focused ? color : ""} text={"Wallet"} />
          ),
        }}
      />
    </Tabs>
  );
}
