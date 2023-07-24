import { SafeAreaView, View } from "react-native";
import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { Image, Text, Box, Button } from "native-base";
import { useRouter } from "expo-router";

const PaginationDots = ({ totalPages, currentPage }) => {
  const dots = [];

  for (let i = 0; i < totalPages; i++) {
    dots.push(
      <View
        key={i}
        style={[
          {
            width: 10,
            height: 10,
            borderRadius: 5,
            margin: 5,
          },
          { backgroundColor: i === currentPage ? "#384657" : "#3D8DFF" },
        ]}
      />
    );
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dots}
    </View>
  );
};

export default function Index() {
  const pagerRef = useRef<PagerView>();
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handlePageSelected = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <Box safeArea background={"gray.24"} flex={1}>
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={{
          flex: 1,
        }}
        orientation="horizontal"
        onPageSelected={handlePageSelected}
      >
        <Box
          key="1"
          style={{
            padding: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../images/bars.png")}
            alt="property"
            style={{
              height: 300,
              width: 300,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text color={"white"} fontSize={32}>
              Property Diversity
            </Text>
          </View>
        </Box>
        <Box
          key="2"
          style={{
            padding: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../images/shield.png")}
            alt="property"
            style={{
              height: 300,
              width: 300,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text color={"white"} fontSize={32}>
              Safe Security
            </Text>
          </View>
        </Box>
        <Box
          key="3"
          style={{
            padding: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../images/rocket.png")}
            alt="property"
            style={{
              height: 300,
              width: 300,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text color={"white"} fontSize={32}>
              Convenient Transaction
            </Text>
          </View>
        </Box>
      </PagerView>
      <Box marginX="auto">
        <PaginationDots totalPages={3} currentPage={currentPage} />
      </Box>
      <Button
        borderRadius={80}
        marginY={8}
        width={"80%"}
        marginX={"auto"}
        bgColor={"#202832"}
        onPress={() => router.replace("/auth")}
      >
        Get Started
      </Button>
    </Box>
  );
}
