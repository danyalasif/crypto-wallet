import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { useRef, useState } from "react";
import { Box } from "native-base";

export default function Swap() {
  const [accountInfo, setAccountInfo] = useState<any>();
  const [walletName, setWalletName] = useState("");

  const inputRef = useRef<TextInput>(null);

  return (
    <Box flex={1} bg="gray.24" p={4} safeArea>
      <Text>Swap Tab</Text>
    </Box>
  );
}
