import { useRouter } from "expo-router";
import {
  Box,
  Text,
  HStack,
  ArrowBackIcon,
  Heading,
  Progress,
  useTheme,
  IconButton,
  Pressable,
  DeleteIcon,
  Button,
} from "native-base";
import { useState } from "react";
import React from "react";
import GradientButton from "../../../ui/GradientButton";
import SecondaryButton from "../../../ui/SecondaryButton";
import PrimaryButton from "../../../ui/PrimaryButton";

export const ConfirmSeedPhrase = ({ seedWords }) => {
  const router = useRouter();
  const { colors } = useTheme();

  const [selectedWords, setSelectedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [isWrongMatch, setIsWrongMatch] = useState(false);

  const hasSelectedAllWords = selectedWords.length === seedWords.length;

  const matchSeed = () => {
    const seedString = seedWords.join(" ");
    const selectedSeedString = selectedWords.join(" ");

    if (seedString === selectedSeedString) {
      setIsMatch(true);
    } else {
      setTimeout(() => {
        reset();
      }, 2000);
      setIsWrongMatch(true);
    }
  };

  const reset = () => {
    setSelectedWords([]);
    setCurrentWord("");
    setIsMatch(false);
    setIsWrongMatch(false);
  };

  return (
    <>
      <Heading
        color={"white"}
        fontSize={"18px"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Confirm Seed Phrase
      </Heading>
      <Text
        mt={4}
        color={"white"}
        fontSize={"14px"}
        w={"60%"}
        textAlign={"center"}
      >
        Select each word in the order it was presented to you
      </Text>
      <SecondaryButton
        leftIcon={<DeleteIcon size={"sm"} color={"white"} />}
        w={100}
        onPress={reset}
        mt={4}
      >
        Reset
      </SecondaryButton>

      {hasSelectedAllWords ? (
        <Text fontSize={"40px"} color={"#6A84A0"} mt={16}>
          Finished
        </Text>
      ) : (
        <Text fontSize={"40px"} color={"#6A84A0"} mt={16}>
          {selectedWords.length + 1}. {currentWord}
        </Text>
      )}

      <HStack space={2} mt={"auto"}>
        {seedWords.map((_, i) => {
          return (
            <Progress
              _filledTrack={{
                bg: i < selectedWords.length ? "primary.5" : "gray.21",
              }}
              size="xs"
              value={100}
              w={`${50 / seedWords.length}%`}
            />
          );
        })}
      </HStack>

      <HStack
        flexWrap={"wrap"}
        borderColor={"#17171A"}
        borderWidth={1}
        borderRadius={8}
        p={2}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        mt={"auto"}
        width={"95%"}
      >
        {seedWords.map((word, i) => {
          return (
            <Pressable
              onPress={() => {
                // Show the current word for 2 seconds then move on
                setCurrentWord(word);

                setTimeout(() => {
                  setSelectedWords((prev) => [...prev, word]);
                  setCurrentWord("");
                }, 500);
              }}
            >
              <Box
                key={i}
                borderWidth={1}
                borderRadius={8}
                bgColor={"gray.21"}
                px={3}
                py={2}
                mb={4}
                ml={4}
              >
                <Text key={i} color={"white"}>
                  {word}
                </Text>
              </Box>
            </Pressable>
          );
        })}
      </HStack>

      <Box width={"100%"} mt={"auto"}>
        {isMatch ? (
          <PrimaryButton onPress={() => {}}>Next</PrimaryButton>
        ) : (
          <SecondaryButton
            onPress={matchSeed}
            bg={isWrongMatch ? "red.5" : "gray.21"}
          >
            {isWrongMatch ? "Not a match, try again" : "Check"}
          </SecondaryButton>
        )}
      </Box>
    </>
  );
};
