import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  InfoIcon,
  Text,
  ShareIcon,
  VStack,
  Icon,
  ScrollView,
  Pressable,
} from "native-base";
import { ReceivedIcon } from "../../../ui/icons/ReceivedIcon";
import { SentIcon } from "../../../ui/icons/SentIcon";
import { useRouter } from "expo-router";

type TransactionStatus = "Confirmed" | "Cancelled";
type TransactionType = "Sent" | "Received";

type Transaction = {
  status: TransactionStatus;
  type: TransactionType;
  amount: string;
  date: string;
};

const TransactionComponent = ({ status, type, amount, date }: Transaction) => {
  const newDate = new Date();
  const humanReadableDate = `${newDate.getUTCMonth()} ${newDate.getDay()} at ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  const router = useRouter();

  const openTransactionModal = () => {
    router.push({
      pathname: "dashboard/wallet/modal",
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

export default function Wallet() {
  const [accountInfo, setAccountInfo] = useState<any>();
  const [walletName, setWalletName] = useState("");

  return (
    <Box flex={1} p={4} safeArea alignItems={"center"}>
      <Heading color={"white"} fontSize={"40px"}>
        19.2371 BNB
      </Heading>
      <Text color={"white"}>$4360.8569</Text>

      <HStack mt={12}>
        <Button
          leftIcon={
            <SentIcon size="xl" fill={"transparent"} stroke={"white"} />
          }
          borderRadius={80}
          mr={2}
          bg={"gray.21"}
        >
          Sent
        </Button>
        <Button
          leftIcon={
            <ReceivedIcon size="xl" fill={"transparent"} stroke={"white"} />
          }
          borderRadius={80}
          ml={2}
          bg={"gray.21"}
        >
          Received
        </Button>
      </HStack>

      <ScrollView mt={6}>
        <TransactionComponent
          status={"Confirmed"}
          type={"Sent"}
          amount={"0.001"}
          date={"12/12/2021"}
        />
        <TransactionComponent
          status={"Cancelled"}
          type={"Received"}
          amount={"0.001"}
          date={"12/12/2021"}
        />
        <TransactionComponent
          status={"Cancelled"}
          type={"Received"}
          amount={"0.001"}
          date={"12/12/2021"}
        />
        <TransactionComponent
          status={"Cancelled"}
          type={"Received"}
          amount={"0.001"}
          date={"12/12/2021"}
        />
      </ScrollView>
    </Box>
  );
}
