import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Office = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex w="30%" gap={5} flexDirection={isLargerThan768 ? "row" : "column"}>
      <Box>
        <Heading fontSize="18px" color="#77797b" mb={5}>
          Mail US:
        </Heading>
        <Text color="white">
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India
        </Text>
      </Box>
      <Box>
        <Heading fontSize="18px" color="#77797b" mb={5}>
          Registered Office Address:
        </Heading>
        <Text color="white">
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
          Telephone:{" "}
          <Text as="b" color="#1877f2">
            044-45614700
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default Office;
