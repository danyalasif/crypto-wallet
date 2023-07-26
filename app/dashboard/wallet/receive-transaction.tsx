import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  ShareIcon,
  ScrollView,
  useClipboard,
  VStack,
  InfoIcon,
  useToast,
} from "native-base";
import { useZustandStore } from "../../../store";
import { truncateTextFromMiddle } from "../../../helpers/methods";

export default function ReceiveTransaction() {
  const { selectedPublicAddress, addressList } = useZustandStore();
  const { onCopy } = useClipboard();
  const toast = useToast();

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
            <VStack
              key={address}
              bg={"gray.21"}
              p={4}
              my={2}
              borderRadius={16}
              alignItems={"center"}
              justifyContent={"center"}
              w={"100%"}
            >
              <Text color={"white"}>{truncatedAddress}</Text>
              <HStack>
                <IconButton icon={<ShareIcon />} />
                <IconButton
                  icon={<InfoIcon />}
                  onPress={() =>
                    toast.show({
                      render: () => (
                        <Text color={"white"}>Copied to clipboard</Text>
                      ),
                      onCloseComplete: () => onCopy(address),
                    })
                  }
                />
              </HStack>
            </VStack>
          );
        })}
      </ScrollView>
    </Box>
  );
}
