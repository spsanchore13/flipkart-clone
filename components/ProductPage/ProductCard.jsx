import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Image h="200px" w="150px" src={product.images[0]} alt={product.name} />
      </Box>
      <VStack>
        <Heading cursor="pointer" _hover={{ color: "#1877f2" }} fontSize="18px">
          {product.name}
        </Heading>
      </VStack>

      <VStack>
        <Heading fontSize="18px">{product.price} Rs</Heading>
      </VStack>
    </Flex>
  );
};

export default ProductCard;
