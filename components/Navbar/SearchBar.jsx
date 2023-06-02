import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/BS";
import AuthModal from "../Auth/AuthModal";

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      display={["none", "none", "none", "flex"]}
      backgroundColor="#2874f0"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      gap="15px"
      p="10px"
    >
      <Box>
        <Image
          alt="logo"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          height={50}
          width={100}
        />
        <Text
          color="white"
          fontSize="14px"
          fontStyle="oblique"
          display="flex"
          gap={1}
        >
          Explore
          <Text as="b" color="yellow.400" fontWeight="bold">
            Plus
            <sup style={{ fontSize: "16px" }}>+</sup>
          </Text>
        </Text>
      </Box>

      <HStack width={"30%"} cursor="pointer">
        <InputGroup backgroundColor="white" borderRadius="5px">
          <Input
            px={5}
            variant="unstyled"
            placeholder="Search for products, brands and more"
          />
          <InputRightAddon background="none">
            <SearchIcon color="#2874f0" />
          </InputRightAddon>
        </InputGroup>
      </HStack>

      <Box>
        <Button borderRadius="5px" color="#2874f0" px="50px" onClick={onOpen}>
          Login
        </Button>
        <AuthModal isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box>
        <Button variant="link" color="white" mx="10px">
          Become a Seller
        </Button>
      </Box>
      <Box>
        <Button
          rightIcon={<ChevronDownIcon />}
          variant="link"
          color="white"
          mx="10px"
        >
          More
        </Button>
      </Box>
      <Box>
        <Button
          variant="link"
          p={2}
          leftIcon={<BsCart3 size="20px" />}
          color="white"
        >
          Cart
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBar;
