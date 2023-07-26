import { useRouter } from "expo-router";
import { Transaction } from "../../../helpers/types";
import { Box, HStack, Pressable, VStack, Text } from "native-base";
import { ReceivedIcon } from "../../../ui/icons/ReceivedIcon";
import { SentIcon } from "../../../ui/icons/SentIcon";
import { ROUTES } from "../../../helpers/consts/routes";

export const TransactionComponent = ({
  status,
  type,
  amount,
  date,
}: Transaction) => {
  const newDate = new Date();
  const humanReadableDate = `${newDate.getUTCMonth()} ${newDate.getDay()} at ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  const router = useRouter();

  const openTransactionModal = () => {
    router.push({
      pathname: ROUTES.TRANSACTION_DETAILS,
      params: { status, type, amount, date },
    });
  };

  return (
    <Pressable onPress={openTransactionModal}>
      <Box
        bg="transparent"
        p={4}
        borderRadius={8}
        justifyContent={"space-between"}
        minW={"100%"}
      >
        <Text mb={2} color={"gray.9"}>
          {humanReadableDate}
        </Text>
        <HStack>
          {type === "Sent" ? (
            <SentIcon size="2xl" fill="transparent" stroke={"white"} />
          ) : (
            <ReceivedIcon size="xl" stroke={"white"} fill="transparent" />
          )}

          <VStack ml={3}>
            <Text fontSize={"16px"} color={"gray.9"}>
              {type} BNB
            </Text>
            <Text color={status === "Confirmed" ? "green.5" : "red.5"}>
              {status}
            </Text>
          </VStack>
          <VStack ml={"auto"} alignItems={"flex-end"}>
            <Text color={"white"}>{amount} BNB</Text>
            <Text color={"gray.9"}>${53.23}</Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );
};
