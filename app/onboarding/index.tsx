import { useRef, useState } from "react";
import PagerView from "react-native-pager-view";
import { Image, Text, Box } from "native-base";
import { useRouter } from "expo-router";
import { PaginationDots } from "../../ui/PaginationDots";
import SecondaryButton from "../../ui/SecondaryButton";

const Onboarding_Pages = [
  {
    key: "1",
    image: require("../../images/bars.png"),
    heading: "Property Diversity",
  },
  {
    key: "2",
    image: require("../../images/shield.png"),
    heading: "Safe Security",
  },
  {
    key: "3",
    image: require("../../images/rocket.png"),
    heading: "Convenient Transaction",
  },
];

export default function Index() {
  const pagerRef = useRef<PagerView>();
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handlePageSelected = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <Box safeArea background={"gray.24"} flex={1} p={4} fontFamily={"Archivo"}>
      <PagerView
        ref={pagerRef}
        initialPage={0}
        style={{
          flex: 1,
        }}
        orientation="horizontal"
        onPageSelected={handlePageSelected}
      >
        {Onboarding_Pages.map((page, index) => {
          return (
            <Box
              key={page.key}
              justifyContent={"center"}
              padding={4}
              alignItems={"center"}
            >
              <Image
                source={page.image}
                alt={page.heading}
                maxW={300}
                maxH={300}
              />
              <Text color={"white"} fontSize={32}>
                {page.heading}
              </Text>
            </Box>
          );
        })}
      </PagerView>
      <Box marginX="auto" paddingY={8}>
        <PaginationDots
          totalPages={Onboarding_Pages.length}
          currentPage={currentPage}
        />
      </Box>
      <Box width={"100%"}>
        <SecondaryButton onPress={() => router.replace("auth")}>
          Get Started
        </SecondaryButton>
      </Box>
    </Box>
  );
}
