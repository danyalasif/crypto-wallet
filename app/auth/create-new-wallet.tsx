import { Link, Stack, useRouter } from "expo-router";
import {
  Box,
  Image,
  Text,
  Button,
  InputGroup,
  FormControl,
  Input,
  VStack,
  HStack,
  Switch,
  ScrollView,
  Circle,
  ArrowBackIcon,
  Checkbox,
  Container,
  InfoIcon,
  Row,
  Heading,
  Progress,
  useTheme,
} from "native-base";
import { useRef, useState } from "react";
import { Animated, View } from "react-native";
import { CustomInput } from "./components/input";
import PagerView from "react-native-pager-view";
import { BlurView } from "expo-blur";
import GradientButton from "../../ui/GradientButton";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import GradientText from "../../ui/GradientText";
import React from "react";

const TOTAL_PAGES = 6;

const HeaderProgress = ({ currentProgress, totalProgress }) => {
  const doneColor = "primary.5";
  const notDoneColor = "#202832";

  return (
    <HStack justifyContent="space-between" alignItems="center" width={"60%"}>
      {Array(totalProgress - 1)
        .fill(1)
        .map((_, i) => {
          return (
            <React.Fragment key={i}>
              {i == 0 ? (
                <Circle
                  size={2}
                  bg={currentProgress > i ? doneColor : notDoneColor}
                />
              ) : null}
              <Box
                flex={1}
                height={"0.5"}
                bg={currentProgress > i + 1 ? doneColor : notDoneColor}
              />
              <Circle
                size={2}
                bg={currentProgress > i + 1 ? doneColor : notDoneColor}
              />
            </React.Fragment>
          );
        })}
    </HStack>
  );
};

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

  const progress = 1;
  const onSubmit = () => {
    console.log({ seedPhrase, password, confirmPassword });
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Create New Wallet",
          header: () => (
            <HStack
              alignItems="center"
              px={4}
              py={4}
              backgroundColor={"gray.24"}
              safeArea
            >
              <ArrowBackIcon mr={16} />
              <HeaderProgress
                currentProgress={currentPage + 1}
                totalProgress={TOTAL_PAGES}
              />
            </HStack>
          ),
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: colors.gray[24],
          },
          headerBackTitle: "Back",
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
            <Button
              onPress={onSubmit}
              borderRadius={80}
              padding={4}
              width={"100%"}
              bgColor={"#FF56A9"}
              _text={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Create Password
            </Button>
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
                onPress: () => {},
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
              onPress: () => {},
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
              <Button
                onPress={() => setIsBlurred(!isBlurred)}
                zIndex={2}
                position={"absolute"}
              >
                View
              </Button>
            ) : null}
            <Text
              color={"white"}
              fontSize={"18px"}
              opacity={isBlurred ? 0.05 : 1}
              height={300}
            >
              This is your seed phrase. Write it down on a paper and keep it in
              a safe place. You'll be asked to re-enter this phrase (in order)
              on the next step.
            </Text>
          </Box>
          <Box width={"100%"} mt={"auto"}>
            <GradientButton
              cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
              buttonProps={{
                onPress: () => {},
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

          <Text fontSize={"40px"} color={"#6A84A0"} mt={32}>
            1.
          </Text>

          <HStack space={2} mt={"auto"}>
            <Progress
              _filledTrack={{ bg: "primary.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "primary.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "primary.5" }}
              size="xs"
              value={100}
              w={"15%"}
            />
          </HStack>

          <HStack
            flexWrap={"wrap"}
            borderColor={"#17171A"}
            borderWidth={1}
            borderRadius={8}
            p={3}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            mt={"auto"}
            width={"95%"}
          >
            {["future", "frequent", "target", "abuse", "organ", "bubble"].map(
              (word, i) => (
                <Box
                  key={i}
                  borderWidth={1}
                  borderRadius={8}
                  bgColor={"#181E25"}
                  px={4}
                  py={2}
                  mb={4}
                  ml={4}
                >
                  <Text key={i} color={"white"}>
                    {word}
                  </Text>
                </Box>
              )
            )}
          </HStack>
        </Box>

        <Box key="6" p={4} alignItems={"center"}>
          <Image
            source={require("../../images/success.png")}
            alt="property"
            style={{
              height: 300,
              width: 300,
            }}
          />
          <GradientText
            maskElement={
              <Heading
                color={"white"}
                fontSize={"40px"}
                fontWeight={"bold"}
                textAlign={"center"}
                bgColor={"transparent"}
              >
                Success!
              </Heading>
            }
            cssGradient="linear-gradient(135deg, #70A2FF 0%, #54F0D1 100%)"
          />
          <Heading
            color={"white"}
            fontSize={"40px"}
            fontWeight={"bold"}
            textAlign={"center"}
            bgColor={"transparent"}
          >
            Success!
          </Heading>
          <Text mt={4} color={"white"} textAlign={"center"}>
            You've successfully protected your wallet. Remember to keep your
            seed phrase safe, it's your responsibility!
          </Text>
          <Box width={"100%"} mt={"auto"}>
            <GradientButton
              cssGradient="linear-gradient(135deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%)"
              buttonProps={{
                onPress: () => {},
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
      </PagerView>
    </>
  );
}
