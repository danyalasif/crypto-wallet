import { useRef, useState, useEffect } from "react";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Avatar,
  FormControl,
  Input,
  ArrowUpIcon,
  ArrowDownIcon,
  Divider,
  useToast,
} from "native-base";
import { Link, useRouter } from "expo-router";
import {
  getRawApi,
  getKeyringFromSeed,
  balancesTransfer,
  TernoaConstants,
} from "ternoa-js";
import { useZustandStore } from "../../../store";
import { truncateTextFromMiddle } from "../../../helpers/methods";
import PrimaryButton from "../../../ui/PrimaryButton";
import PagerView from "react-native-pager-view";
import { ROUTES } from "../../../helpers/consts/routes";

export default function SendTransaction() {
  const pagerRef = useRef<PagerView>();
  const toast = useToast();

  const { selectedPublicAddress, addressList, balance, exchangeRate } =
    useZustandStore();
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState(0);
  const [networkFee, setNetworkFee] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [isTransferingBalance, setIsTransferingBalance] = useState(false);
  const router = useRouter();

  const transferAmount = async () => {
    const api = await getRawApi();
    const keyring = await getKeyringFromSeed(
      "spawn uphold clap reopen pass noise rent rose tail pass tragic medal"
    );
    try {
      setIsTransferingBalance(true);
      const res = await balancesTransfer(
        sendAddress,
        sendAmount,
        keyring,
        TernoaConstants.WaitUntil.BlockInclusion
      );

      toast.show({
        render: () => {
          return (
            <Box bg="green.5" px="2" py="1" rounded="sm" mb={5}>
              Transaction Successfull
            </Box>
          );
        },
        onCloseComplete: () => router.replace(ROUTES.WALLET),
      });

      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsTransferingBalance(false);
    }
  };

  useEffect(() => {
    if (sendAmount <= 0) return;

    const getNetworkFee = async ({ toAddress, fromAddress }) => {
      const api = await getRawApi();
      const keyring = await getKeyringFromSeed(
        "spawn uphold clap reopen pass noise rent rose tail pass tragic medal"
      );
      const info = await api.tx.balances
        .transfer(toAddress, sendAmount)
        .paymentInfo(fromAddress);

      console.log(`
        class=${info.class.toString()},
        weight=${info.weight.toString()},
        partialFee=${info.partialFee.toHuman()}
      `);
      return info;
    };

    getNetworkFee({
      toAddress: sendAddress,
      fromAddress: selectedPublicAddress,
    }).then((info) => {
      {
        setNetworkFee(parseFloat(info.partialFee.toHuman()) / 1000);
      }
    });
  }, [sendAmount]);

  const handlePageSelected = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const goToNextPage = () => {
    pagerRef.current?.setPage(currentPage + 1);
  };

  const truncatedAddress = truncateTextFromMiddle({
    text: selectedPublicAddress,
    beforeChars: 15,
    afterChars: 15,
  });

  const truncatedSendAddress = truncateTextFromMiddle({
    text: sendAddress,
    beforeChars: 15,
    afterChars: 15,
  });

  return (
    <PagerView
      ref={pagerRef}
      initialPage={0}
      style={{
        flex: 1,
      }}
      orientation="horizontal"
      onPageSelected={handlePageSelected}
      scrollEnabled={false}
    >
      <Box
        key={"1"}
        flex={1}
        p={4}
        safeArea
        alignItems={"flex-start"}
        bg={"gray.24"}
      >
        <Box w={"100%"} mb={8}>
          <Text color={"white"} fontSize={"16px"} mb={4}>
            From
          </Text>
          <HStack>
            <Avatar mr={4}>{selectedPublicAddress.slice(0, 2)}</Avatar>
            <VStack>
              <Text color={"white"} mb={2}>
                {truncatedAddress}
              </Text>
              <Text color={"gray.9"}>Balance: {balance}</Text>
            </VStack>
          </HStack>
        </Box>

        <Box w={"100%"} mb={8}>
          <Text color={"white"} fontSize={"16px"} mb={4}>
            To
          </Text>
          <FormControl>
            <Input
              placeholder="Search, public address (0x), or ENS"
              borderRadius={18}
              placeholderTextColor={"gray.9"}
              color={"white"}
              borderColor={"gray.21"}
              onChangeText={(text) => setSendAddress(text)}
            />
          </FormControl>
        </Box>

        <Link href={"dashboard/settings"} asChild>
          <Text color={"blue.5"} mb={8} underline>
            Transfer Between My Accounts
          </Text>
        </Link>

        <Box w={"100%"} mt={"auto"}>
          <PrimaryButton onPress={goToNextPage}>Next</PrimaryButton>
        </Box>
      </Box>

      <Box
        key={"2"}
        flex={1}
        p={4}
        safeArea
        alignItems={"center"}
        bg={"gray.24"}
      >
        <Heading color={"white"} fontSize={"25px"}>
          Amount
        </Heading>

        <Box w={"100%"} mb={8} alignItems={"center"}>
          <FormControl>
            <Input
              placeholder="0"
              borderRadius={18}
              placeholderTextColor={"gray.9"}
              color={"white"}
              fontSize={"48px"}
              textAlign={"center"}
              borderWidth={0}
              keyboardType="number-pad"
              _focus={{
                bgColor: "gray.24",
              }}
              onChangeText={(text) => setSendAmount(Number(text))}
            />
          </FormControl>
        </Box>
        <HStack
          borderRadius={18}
          bg={"gray.21"}
          p={2}
          mb={8}
          alignItems={"center"}
        >
          <Text color="white" fontSize={"14px"}>
            ${sendAmount * exchangeRate}
          </Text>
          <ArrowUpIcon ml={2} />
          <ArrowDownIcon />
        </HStack>

        <Text color="white" fontSize={"16px"}>
          Balance: {balance}
        </Text>
        <Box w={"100%"} mt={"auto"}>
          <PrimaryButton onPress={goToNextPage}>Next</PrimaryButton>
        </Box>
      </Box>

      <Box
        key={"3"}
        flex={1}
        p={4}
        safeArea
        alignItems={"flex-start"}
        bg={"gray.24"}
      >
        <Box w={"100%"} mb={8}>
          <Text color={"white"} fontSize={"16px"} mb={4}>
            From
          </Text>
          <HStack>
            <Avatar mr={4}>{selectedPublicAddress.slice(0, 2)}</Avatar>
            <VStack>
              <Text color={"white"} mb={2}>
                {truncatedAddress}
              </Text>
              <Text color={"white"}>Balance: {balance}</Text>
            </VStack>
          </HStack>
        </Box>

        <Box w={"100%"} mb={8}>
          <Text color={"white"} fontSize={"16px"} mb={4}>
            To
          </Text>
          <HStack>
            <Avatar mr={4}>{sendAddress.slice(0, 2)}</Avatar>
            <VStack>
              <Text color={"white"} mb={2}>
                {truncatedSendAddress}
              </Text>
            </VStack>
          </HStack>
        </Box>

        <VStack
          w={"100%"}
          mt="auto"
          borderWidth={1}
          p={4}
          borderRadius={12}
          bg={"gray.21"}
        >
          <HStack justifyContent={"space-between"}>
            <Text color="white">Amount</Text>
            <Text color="white">{sendAmount} CAPS</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text color="white" mt={2}>
              Network fee
            </Text>
            <Text color="white" mt={2}>
              {networkFee} CAPS
            </Text>
          </HStack>

          <Divider my={3} bgColor={"gray.12"} />

          <HStack justifyContent={"space-between"}>
            <Text color="white" fontSize={"16px"}>
              Total Amount
            </Text>
            <Text color="white" fontSize={"16px"}>
              {sendAmount + networkFee}
            </Text>
          </HStack>
          <Text color="gray.12" fontSize={"14px"} ml={"auto"}>
            ${(sendAmount + networkFee) * exchangeRate}
          </Text>
        </VStack>

        <Box w={"100%"} mt={"auto"}>
          <PrimaryButton
            onPress={transferAmount}
            disabled={isTransferingBalance}
            isLoading={isTransferingBalance}
          >
            Send
          </PrimaryButton>
        </Box>
      </Box>
    </PagerView>
  );
}
