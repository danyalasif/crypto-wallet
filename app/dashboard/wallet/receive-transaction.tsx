import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  ShareIcon,
  ScrollView,
} from "native-base";
import { useZustandStore } from "../../../store";
import { truncateTextFromMiddle } from "../../../helpers/methods";

export default function ReceiveTransaction() {
  const { selectedPublicAddress, addressList } = useZustandStore();

  return (
    <Box flex={1} p={4} safeArea alignItems={"center"} bg={"gray.24"}>
      <Heading color={"white"} fontSize={"18px"} mb={4}>
        Use the addresses below to receive CAPS.
      </Heading>
      <ScrollView>
        {addressList.map((address) => {
          const truncatedAddress = truncateTextFromMiddle({
            text: address,
            beforeChars: 15,
            afterChars: 15,
          });
          return (
            <HStack
              key={address}
              bg={"gray.21"}
              p={4}
              my={2}
              borderRadius={16}
              alignItems={"center"}
              w={"100%"}
            >
              <Text color={"white"}>{truncatedAddress}</Text>
              <IconButton icon={<ShareIcon />} ml={"auto"} />
            </HStack>
          );
        })}
      </ScrollView>
    </Box>
  );
}
