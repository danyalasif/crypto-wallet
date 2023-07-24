import { useRouter } from "expo-router";
import { Box, Image, Text, Button } from "native-base";

export default function WalletSetup() {
  const router = useRouter();

  return (
    <Box
      style={{
        padding: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#080A0C",
        flex: 1,
      }}
    >
      <Image
        source={require("../../images/wallet.png")}
        alt="property"
        style={{
          height: 300,
          width: 300,
        }}
      />
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <Text color={"white"} fontSize={32}>
          Wallet Setup
        </Text>
      </Box>

      <Box style={{ width: "100%" }} marginX={"auto"} alignItems={"center"}>
        <Button
          borderRadius={80}
          padding={4}
          marginY={8}
          width={"80%"}
          bgColor={"#202832"}
          onPress={() => router.push("auth/import-from-seed")}
        >
          Import Using Seed Phrase
        </Button>
        <Button
          borderRadius={80}
          padding={4}
          width={"80%"}
          bgColor={"#FF56A9"}
          onPress={() => router.push("auth/create-new-wallet")}
        >
          Create a New Wallet
        </Button>
      </Box>
    </Box>
  );
}
