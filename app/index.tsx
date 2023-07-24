import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { useRef, useState } from "react";
import { Redirect } from "expo-router";

async function main() {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider("wss://westend-rpc.polkadot.io");

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version(),
  ]);

  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
  );

  // const keyring = new Keyring({ type: "sr25519" });

  // // Add the first account
  // const account1 = keyring.addFromUri("//Alice");
  // console.log(account1.address);
}

// main().catch(console.error);

export default function Home() {
  const [accountInfo, setAccountInfo] = useState<any>();
  const [walletName, setWalletName] = useState("");

  const inputRef = useRef<TextInput>(null);

  const getAccountInfo = () => {
    const keyring = new Keyring({ type: "sr25519" });
    console.log({ inputRef: walletName });
    const account1 = keyring.addFromUri(walletName);

    setAccountInfo(account1);
  };
  return <Redirect href="/onboarding" />;
  return (
    <SafeAreaView
      style={{ padding: 32, justifyContent: "space-between", height: 600 }}
    >
      <Text>{accountInfo?.address}</Text>
      <TextInput
        placeholder="Enter Wallet Name"
        onChangeText={(text) => setWalletName(text)}
      />
      <Button title="Get Wallet" onPress={getAccountInfo} />
    </SafeAreaView>
  );
}
