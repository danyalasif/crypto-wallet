import { HStack, Circle, Box } from "native-base";
import React from "react";

export const HeaderProgress = ({ currentProgress, totalProgress }) => {
  const doneColor = "primary.5";
  const notDoneColor = "#202832";

  return (
    <HStack justifyContent="space-between" alignItems="center" width={"100%"}>
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
