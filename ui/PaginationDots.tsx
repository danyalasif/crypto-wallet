import { Box, HStack } from "native-base";

interface Props {
  totalPages: number;
  currentPage: number;
}

export const PaginationDots = ({ totalPages, currentPage }: Props) => {
  const dots = [];

  for (let i = 0; i < totalPages; i++) {
    dots.push(
      <Box
        key={i}
        width={2.5}
        height={2.5}
        borderRadius={5}
        margin={1.5}
        bgColor={i === currentPage ? "#384657" : "#3D8DFF"}
      />
    );
  }

  return <HStack>{dots}</HStack>;
};
