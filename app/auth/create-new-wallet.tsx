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
} from "native-base";
import { useRef, useState } from "react";
import { Animated, View } from "react-native";
import { CustomInput } from "./components/input";
import PagerView from "react-native-pager-view";

const TOTAL_PAGES = 5;

const HeaderProgress = ({ currentProgress, totalProgress }) => {
  const doneColor = "#3D8DFF";
  const notDoneColor = "#202832";

  return (
    <HStack justifyContent="space-between" alignItems="center" width={"60%"}>
      {Array(totalProgress - 1)
        .fill(1)
        .map((_, i) => {
          return (
            <>
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
            </>
          );
        })}
    </HStack>
  );
};

export default function CreateNewWallet() {
  const router = useRouter();
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
              backgroundColor={"#080A0C"}
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
            backgroundColor: "#080A0C",
          },
          headerBackTitle: "Back",
        }}
      />
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={{
          flex: 1,
          backgroundColor: "#080A0C",
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
                onTrackColor={"#3D8DFF"}
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

          <Button
            onPress={onSubmit}
            borderRadius={80}
            padding={2}
            mt={8}
            width={"100%"}
            bgColor={"#FF56A9"}
            _text={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Start
          </Button>
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
              _filledTrack={{ bg: "#76E268" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "#76E268" }}
              size="xs"
              value={100}
              w={"15%"}
            />
            <Progress
              _filledTrack={{ bg: "#76E268" }}
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
          <Button
            onPress={onSubmit}
            borderRadius={80}
            padding={2}
            mt={8}
            width={"100%"}
            bgColor={"#FF56A9"}
            _text={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Next
          </Button>
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
          <Box flex={1} alignItems="center" justifyContent="center">
            <Box
              width={"100%"}
              height={300}
              alignItems="center"
              justifyContent="center"
              bg={isBlurred ? "rgba(255, 255, 255, 0.8)" : "transparent"}
            >
              <Text mt={4} color={"white"} fontSize={"16px"}>
                Your seed phrase
              </Text>
              {true && (
                <Button
                  onPress={() => setIsBlurred(!isBlurred)}
                  position="absolute"
                >
                  View
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </PagerView>
    </>
  );
}
