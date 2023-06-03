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
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
// import Image from "next/image";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import AuthModal from "../Auth/AuthModal";
import { signOut, useSession } from "next-auth/react";

const SearchBar = () => {
  const { data: session } = useSession();

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
          alt="flipkart-logo"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          height="30px"
          width="100px"
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
          <InputRightAddon background="transparent" border="none">
            <SearchIcon color="#2874f0" />
          </InputRightAddon>
        </InputGroup>
      </HStack>

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

      {session && (
        <Box>
          <Button
            variant="link"
            p={2}
            leftIcon={<BsCart3 size="25px" />}
            color="white"
          >
            Cart
          </Button>
        </Box>
      )}

      {!session ? (
        <Box>
          <Button px="40px" borderRadius="5px" color="#2874f0" onClick={onOpen}>
            Login
          </Button>
          <AuthModal isOpen={isOpen} onClose={onClose} />
        </Box>
      ) : (
        <Popover arrowSize={18}>
          <PopoverTrigger>
            <Button
              _hover={{ backgroundColor: "transparent" }}
              backgroundColor="transparent"
              color="white"
              borderRadius="5px"
              fontSize="20px"
              fontWeight="semibold"
              rightIcon={<Image boxSize="30px" src={session.user.image} />}
            >
              {session.user.name}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />

            <PopoverBody>
              <List>
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  My Profile
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  SuperCoin Zone
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Flipkart Plus ZOne
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Orders
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Wishlist
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Coupons
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Gift Cards
                </ListItem>
                <Divider />
                <ListItem cursor="pointer" fontSize="20px" my="5px">
                  Notifications
                </ListItem>
                <Divider />
                <ListItem
                  cursor="pointer"
                  onClick={() => signOut()}
                  fontSize="20px"
                  my="5px"
                >
                  Logout
                </ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Stack>
  );
};

export default SearchBar;
