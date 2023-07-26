import { useState, useEffect } from "react";
import { Box, Button, HStack, Heading, Text, ScrollView } from "native-base";
import { ReceivedIcon } from "../../../ui/icons/ReceivedIcon";
import { SentIcon } from "../../../ui/icons/SentIcon";
import { useRouter } from "expo-router";
import {
  balanceToNumber,
  getTotalBalance,
  getRawApi,
  initializeApi,
} from "ternoa-js";
import { useZustandStore } from "../../../store";
import { getKCapsPriceInUSD } from "../../../helpers/api";
import { convertKCapsToUSD } from "../../../helpers/methods";
import { TransactionComponent } from "../components/transactionItem";
import { ROUTES } from "../../../helpers/consts/routes";
import { ActivityIndicator } from "react-native";

const getBalance = async (publicAddress) => {
  // console.log({ publicAddress });
  try {
    const totalBalanceBN = await getTotalBalance(publicAddress);
    const totalBalance = balanceToNumber(totalBalanceBN);
    // console.log(
    //   `The total balance of ${publicAddress} is: ${totalBalance} and BN: ${totalBalanceBN}`
    // );
    return totalBalance;
  } catch (e) {
    console.error(e);
  }
};

const getTransactions = async (publicAddress: string) => {
  const api = await getRawApi();
  const latestBlockHash = await api.rpc.chain.getFinalizedHead();
  const latestBlock = await api.rpc.chain.getBlock(latestBlockHash);

  const transactions = [];
  console.log({ latestBlock, latestBlockHash });

  latestBlock.block.extrinsics.forEach((extrinsic) => {
    const { method, signer } = extrinsic;
    console.log(signer.toString());
    if (signer.toString() === publicAddress) {
      console.log(`Transaction: ${method.section}.${method.method}`);
    }
  });

  return transactions;
};

export default function Wallet() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<any>([]);
  const { selectedPublicAddress, setGlobalState, balance, balanceInUSD } =
    useZustandStore();

  useEffect(() => {
    const updateBalance = async () => {
      setIsLoading(true);
      await initializeApi();
      const balance = await getBalance(selectedPublicAddress);
      const exchangeRate = await getKCapsPriceInUSD();
      const balanceInUSD = await convertKCapsToUSD(balance, exchangeRate);

      const transactionsData = await getTransactions(selectedPublicAddress);
      setTransactions(transactionsData);
      setGlobalState({ balanceInUSD, balance, exchangeRate });
      setIsLoading(false);
    };

    updateBalance();
  }, [selectedPublicAddress]);

  return (
    <Box flex={1} p={4} safeArea alignItems={"center"}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Heading color={"white"} fontSize={"40px"}>
            {balance}
          </Heading>
          <Text color={"white"} mt={4}>
            ${balanceInUSD}
          </Text>
        </>
      )}

      <HStack mt={12}>
        <Button
          leftIcon={
            <SentIcon size="xl" fill={"transparent"} stroke={"white"} />
          }
          borderRadius={80}
          mr={2}
          bg={"gray.21"}
          onPress={() => router.push(ROUTES.SEND_TRANSACTION)}
        >
          Send
        </Button>
        <Button
          leftIcon={
            <ReceivedIcon size="xl" fill={"transparent"} stroke={"white"} />
          }
          borderRadius={80}
          ml={2}
          bg={"gray.21"}
          onPress={() => router.push(ROUTES.RECIEVE_TRANSACTION)}
        >
          Receive
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
