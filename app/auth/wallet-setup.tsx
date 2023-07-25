import { useRouter } from "expo-router";
import { Box, Image, Text, Button } from "native-base";
import SecondaryButton from "../../ui/SecondaryButton";
import PrimaryButton from "../../ui/PrimaryButton";

export default function WalletSetup() {
  const router = useRouter();

  return (
    <Box
      p={4}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"gray.24"}
      flex={1}
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

      <Box width={"100%"} justifyContent={"space-between"} marginY={8}>
        <SecondaryButton
          onPress={() => router.push("auth/import-from-seed")}
          mb={4}
        >
          Import Using Seed Phrase
        </SecondaryButton>
        <PrimaryButton onPress={() => router.push("auth/create-new-wallet")}>
          Create a New Wallet
        </PrimaryButton>
      </Box>
    </Box>
  );
}
