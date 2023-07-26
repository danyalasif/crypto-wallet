import { Link, useSearchParams } from "expo-router";
import { Box, HStack, Heading, Text, VStack } from "native-base";
export default function TransactionModal() {
  const params = useSearchParams();

  const { status, type, amount, date } = params;
  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      justifyContent={"center"}
      background={"transluscent"}
      height={"100%"}
      p={8}
    >
      <Heading color="white">{type} BNB</Heading>
      <HStack w={"100%"} justifyContent={"space-between"} mt={8}>
        <VStack>
          <Text color="gray.9">Status</Text>
          <Text color={status === "Confirmed" ? "green.5" : "red.5"}>
            {status}
          </Text>
        </VStack>
        <VStack alignItems={"flex-end"}>
          <Text color="gray.9">Date</Text>
          <Text color="white">{date}</Text>
        </VStack>
      </HStack>

      <HStack w={"100%"} justifyContent={"space-between"} mt={8}>
        <VStack>
          <Text color="gray.9">From</Text>
          <Text color="white">{status}</Text>
        </VStack>
        <VStack alignItems={"flex-end"}>
          <Text color="gray.9">To</Text>
          <Text color="white">{status}</Text>
        </VStack>
      </HStack>

      <VStack alignSelf={"flex-start"} mt={8}>
        <Text color="gray.9">Nonce</Text>
        <Text color="white">#0</Text>
      </VStack>

      <HStack
        w={"100%"}
        justifyContent={"space-between"}
        mt="auto"
        borderWidth={1}
        p={4}
        borderRadius={12}
        bg={"gray.21"}
      >
        <Text color="white">Total Amount</Text>
        <VStack>
          <Text color="white">0.04 BNB</Text>
          <Text color="white" mt={2}>
            $9.58799
          </Text>
        </VStack>
      </HStack>

      <Link href="../">Dismiss</Link>
    </Box>
  );
}
