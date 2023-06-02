import {
  Box,
  HStack,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Filters = () => {
  return (
    <VStack
      h="100vh"
      w="30vw"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      align="start"
      p={5}
    >
      <Heading fontSize="24px">Filters</Heading>

      <Box>
        <RangeSlider
          colorScheme="blue"
          aria-label={["min", "max"]}
          defaultValue={[10, 30]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <HStack></HStack>
      </Box>
    </VStack>
  );
};

export default Filters;
