import { useRouter } from "expo-router";
import { Box, Image, Text, Button } from "native-base";
import SecondaryButton from "../../ui/SecondaryButton";
import PrimaryButton from "../../ui/PrimaryButton";
import { useZustandStore } from "../../store";
import { ROUTES } from "../../helpers/consts/routes";

export default function WalletSetup() {
  const router = useRouter();
  const { selectedPublicAddress } = useZustandStore();

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
          onPress={() => router.push(ROUTES.IMPORT_FROM_SEED)}
          mb={4}
        >
          Import Using Seed Phrase
        </SecondaryButton>
        <PrimaryButton onPress={() => router.push(ROUTES.CREATE_NEW_WALLET)}>
          Create a New Wallet
        </PrimaryButton>
      </Box>
      {selectedPublicAddress && (
        <SecondaryButton
          w={"50%"}
          onPress={() => router.replace(ROUTES.SETTINGS)}
        >
          Go back
        </SecondaryButton>
      )}
    </Box>
  );
}
