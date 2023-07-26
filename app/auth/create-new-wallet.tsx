import { Stack, useRouter } from "expo-router";
import {
  Box,
  Image,
  Text,
  Button,
  FormControl,
  Input,
  VStack,
  HStack,
  Switch,
  ArrowBackIcon,
  Checkbox,
  InfoIcon,
  Row,
  Heading,
  Progress,
  useTheme,
  IconButton,
} from "native-base";
import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import GradientButton from "../../ui/GradientButton";
import React from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import { HeaderProgress } from "../../ui/HeaderProgress";
import { EyeIcon } from "../../ui/icons/EyeIcon";
import { ConfirmSeedPhrase } from "./components/confirm-seed-phrase";
import { SuccessSeedPhrase } from "./components/success-seed-phrase";

const TOTAL_PAGES = 6;
const SEED = "test ";

const SEED_WORDS = SEED.split(" ");

export default function CreateNewWallet() {
  const router = useRouter();
  const { colors } = useTheme();
  const [seedPhrase, setSeedPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(false);
  const pagerRef = useRef<PagerView>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isBlurred, setIsBlurred] = useState(true);

  const handlePageSelected = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const onSubmit = () => {
    console.log({ seedPhrase, password, confirmPassword });
  };

  const goToNextPage = () => {
    pagerRef.current.setPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    pagerRef.current.setPage(currentPage - 1);
  };

  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <HStack
              alignItems="center"
              px={4}
              py={4}
              backgroundColor={"gray.24"}
              safeArea
            >
              <IconButton
                icon={<ArrowBackIcon />}
                onPress={() => router.back()}
                _icon={{
                  color: "white",
                }}
              />

              <Box mx={"auto"} maxWidth={"300"}>
                <HeaderProgress
                  currentProgress={currentPage + 1}
                  totalProgress={TOTAL_PAGES}
                />
              </Box>
            </HStack>
          ),
        }}
      />
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={{
          flex: 1,
          backgroundColor: colors.gray[24],
        }}
        orientation="horizontal"
        onPageSelected={handlePageSelected}
      >
        <Box key="1" p={4} alignItems="center" justifyContent="center">
          <Box alignItems={"center"} mt={5} p={5}>
            <Text color="#70A2FF" fontSize={"16px"} fontWeight={"bold"} mb={2}>
              Create Password
            </Text>
            <Text color="white" textAlign={"center"}>
              This password will unlock your Metamask wallet only on this
              service
            </Text>
          </Box>

          <VStack space={5} mt={5} width={"100%"}>
            <FormControl isRequired>
              <Input
                onChangeText={setPassword}
                value={password}
                placeholder="New Password"
                type="password"
                placeholderTextColor={"#6A84A0"}
                borderRadius={16}
                p={4}
                color={"white"}
              />
            </FormControl>

            <FormControl isRequired>
              <Input
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="Confirm Password"
                placeholderTextColor={"#6A84A0"}
                type="password"
                borderRadius={16}
                p={4}
                color={"white"}
              />
            </FormControl>
            <HStack
              space={2}
              alignItems="center"
              justifyContent="space-between"
              mt={4}
            >
              <Text color="white">Sign in with Face ID?</Text>
              <Switch
                isChecked={isFaceIdEnabled}
                onToggle={setFaceIdEnabled}
                onTrackColor={"primary.5"}
              />
            </HStack>
            <HStack space={6}>
              <Checkbox
                value="test"
                accessibilityLabel="Checkbox"
                _text={{
                  color: "white",
                }}
              >
                I understand that DeGe cannot recover this password for me.
                Learn more
              </Checkbox>
            </HStack>
            <PrimaryButton onPress={goToNextPage}>
              Create Password
            </PrimaryButton>
          </VStack>
        </Box>

        <Box key="2" p={4} alignItems="center" justifyContent="center">
          <Image
            source={require("../../images/shield.png")}
            alt="property"
            style={{
              height: 300,
              width: 300,
            }}
          />
          <Box mt={2}>
            <Text
              color={"white"}
              fontSize={"16px"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Secure Your Wallet
            </Text>
            <Text fontSize={"14px"} color={"white"} lineHeight={"24px"} mt={2}>
              Don't risk losing your funds. protect your wallet by saving your
              Seed phrase in a place you trust.
            </Text>

            <Text fontSize={"14px"} color={"white"} lineHeight={"24px"} mt={2}>
              It's the only way to recover your wallet if you get locked out of
              the app or get a new device.
            </Text>
          </Box>

          <Button variant={"link"} color={"#5F97FF"} mt={2}>
            Remind me later
          </Button>
          <Box width={"100%"}>
            <GradientButton
              cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
              buttonProps={{
                onPress: goToNextPage,
                _text: {
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            >
              Start
            </GradientButton>
          </Box>
        </Box>

        <Box key="3" p={4} justifyContent={"space-between"}>
          <Row alignContent={"center"} alignItems={"center"} width={"100%"}>
            <Heading
              color={"white"}
              fontSize={"16px"}
              fontWeight={"bold"}
              textAlign={"center"}
              ml={"auto"}
            >
              Secure Your Wallet
            </Heading>
            <InfoIcon ml={"auto"} />
          </Row>
          <Text mt={4} color={"white"}>
            Secure your wallet's "Seed Phrase"
          </Text>
          <Text mt={4} color={"white"}>
            Manual
          </Text>
          <Text mt={4} color={"white"}>
            Write down your seed phrase on a piece of paper and store in a safe
            place.
          </Text>
          <Text mt={4} color={"white"}>
            Security lever: Very strong
          </Text>
          <HStack space={2}>
            <Progress
              _filledTrack={{ bg: "green.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "green.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "green.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
          </HStack>
          <Text mt={4} color={"white"}>
            Risks are: {"\n"}• You lose it {"\n"}• You forget where you put it{" "}
            {"\n"}• Someone else finds it
          </Text>
          <Text mt={4} color={"white"}>
            Tips: {"\n"}• Store in bank vault {"\n"}• Store in a safe {"\n"}•
            Store in multiple secret places
          </Text>
          <GradientButton
            cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
            buttonProps={{
              onPress: goToNextPage,
              _text: {
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              },
            }}
          >
            Next
          </GradientButton>
        </Box>

        <Box key="4" p={4}>
          <Heading
            color={"white"}
            fontSize={"18px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Write Down Your Seed Phrase
          </Heading>
          <Text mt={4} color={"white"} fontSize={"14px"}>
            This is your seed phrase. Write it down on a paper and keep it in a
            safe place. You'll be asked to re-enter this phrase (in order) on
            the next step.
          </Text>
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
            top={50}
          >
            {isBlurred ? (
              <Image
                resizeMode="cover"
                source={require("../../images/blurry-rect.png")}
                borderRadius={2}
                position={"absolute"}
                zIndex={isBlurred ? 1 : 0}
                height={300}
                alt={"Blur"}
                opacity={0.8}
                w={"95%"}
              />
            ) : null}
            {isBlurred ? (
              <VStack
                zIndex={2}
                position={"absolute"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Box alignItems={"center"} mb={8}>
                  <Text color={"white"} fontSize={"16px"} py={4}>
                    Tap to reveal your seed phrase
                  </Text>
                  <Text color={"gray.9"} fontSize={"16px"}>
                    Make sure no one is watching your screen.
                  </Text>
                </Box>

                <Button
                  bgColor={"gray.21"}
                  p={4}
                  borderRadius={168}
                  onPress={() => setIsBlurred(!isBlurred)}
                  leftIcon={<EyeIcon size="lg" />}
                >
                  View
                </Button>
              </VStack>
            ) : null}
            <Box
              w={"80%"}
              flexWrap={"wrap"}
              height={350}
              borderRadius={8}
              borderColor={"green.1"}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              {SEED_WORDS.map((word, i) => {
                return (
                  <Box
                    key={i}
                    borderWidth={1}
                    borderRadius={8}
                    bgColor={"gray.21"}
                    opacity={isBlurred ? 0.05 : 1}
                    px={4}
                    py={2}
                    mb={4}
                    ml={4}
                    w={"131px"}
                    alignItems={"center"}
                  >
                    <Text key={i} color={"white"}>
                      {i + 1}. {word}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box width={"100%"} mt={"auto"}>
            <GradientButton
              cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
              buttonProps={{
                onPress: goToNextPage,
                _text: {
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            >
              Next
            </GradientButton>
          </Box>
        </Box>
        <Box key="5" p={4} alignItems={"center"}>
          <ConfirmSeedPhrase seedWords={SEED_WORDS} />
        </Box>
        <Box key="6" p={4} alignItems={"center"}>
          <SuccessSeedPhrase />
        </Box>
      </PagerView>
    </>
  );
}
