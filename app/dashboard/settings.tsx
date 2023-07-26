import { Avatar, Box, HStack, Heading, ScrollView, Text } from "native-base";
import PrimaryButton from "../../ui/PrimaryButton";
import { useZustandStore } from "../../store";
import SecondaryButton from "../../ui/SecondaryButton";
import { useRouter } from "expo-router";
import { truncateTextFromMiddle } from "../../helpers/methods";
import { ROUTES } from "../../helpers/consts/routes";

export default function Settings() {
  const {
    addressList,
    selectedPublicAddress,
    setPublicAddress,
    clearUserStore,
    clearGlobalState,
  } = useZustandStore();
  const router = useRouter();

  const logout = () => {
    clearGlobalState();
    clearUserStore();

    setTimeout(() => {
      router.replace(ROUTES.ONBOARDING);
    }, 500);
  };

  return (
    <Box flex={1} bg="gray.24" p={6}>
      <Heading color={"white"} mb={4}>
        Wallets
      </Heading>
      <ScrollView>
        {addressList.map((address) => {
          const truncatedAddress = truncateTextFromMiddle({
            text: address,
            beforeChars: 8,
            afterChars: 8,
          });

          const isCurrentAddress = address === selectedPublicAddress;

          return (
            <HStack key={address} alignItems={"center"} mb={8}>
              <Avatar bg="green.500" mr={2}>
                {address.slice(0, 3)}
              </Avatar>
              <Text color={"white"} key={address}>
                {truncatedAddress}
              </Text>
              {isCurrentAddress ? (
                <Text color={"green.5"} ml={"auto"}>
                  Selected
                </Text>
              ) : (
                <SecondaryButton
                  ml={"auto"}
                  onPress={() => setPublicAddress(address)}
                  w={90}
                >
                  Select
                </SecondaryButton>
              )}
            </HStack>
          );
        })}
      </ScrollView>
      <SecondaryButton mb={4} bg={"red.5"} onPress={logout}>
        Log Out
      </SecondaryButton>
      <PrimaryButton
        onPress={() => router.push(ROUTES.WALLET_SETUP)}
        alignSelf={"flex-end"}
      >
        Add another wallet
      </PrimaryButton>
    </Box>
  );
}
