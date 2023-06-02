import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
  Spacer,
  VStack,
  Divider,
  Avatar,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import SearchBar from "./SearchBar";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import { BsCart3 } from "react-icons/bs";

const Nav_Items = [
  {
    name: "Grocery",
    link: "/",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    name: "Mobiles",
    link: "/mobiles",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    name: "Fashion",
    link: "/fashion",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    name: "Electronics",
    link: "/electronics",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  },
  {
    name: "Home",
    link: "/home",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    name: "Appliances",
    link: "/appliances",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    name: "Travel",
    link: "/travel",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
  },
  {
    name: "Top Offers",
    link: "/top-offers",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    name: "Beauty, Toys & More",
    link: "/beauty-toy-and-more",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    name: "Two Wheelers",
    link: "/two-wheelers",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
    submenu: [
      {
        name: "Petrol Vehicle",
        link: "two-wheelers/petrol",
      },
      {
        name: "Electric Vehicle",
        link: "two-wheelers/electric",
      },
    ],
  },
];

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Stack
      position="sticky"
      top={0}
      zIndex={9}
      borderBottom="1px solid #e9ebee"
      backgroundColor="white"
    >
      <SearchBar />

      <HStack
        display={["none", "none", "none", "flex"]}
        justifyContent="space-between"
        px={5}
        py={3}
        justifyItems="center"
        backgroundColor="white"
      >
        {Nav_Items.map((item, index) => (
          <Box
            key={`${item.name}-${index}`}
            cursor="pointer"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              alt={item.name}
              src={item.image}
              width="70px"
              height="80px"
            />
            <Text
              _hover={{ color: "#2874f0" }}
              fontWeight="semibold"
              textAlign="center"
            >
              {item.name}
            </Text>
            {/* <Menu>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {item.name}
              </MenuButton>
              {item?.submenu?.map((menu) => (
                <MenuList>
                  <MenuItem>{menu.name}</MenuItem>
                </MenuList>
              ))}
            </Menu> */}
          </Box>
        ))}
      </HStack>

      {/* Small Screen Navbar */}

      <SmallScreenNavbar />
    </Stack>
  );
};

export default Navbar;

const SmallScreenNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      display={["flex", "flex", "flex", "none"]}
      backgroundColor="#2874f0"
      alignItems="center"
      w="100%"
      h="100%"
      p={2}
    >
      <Button _hover={{ backgroundColor: "white" }} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Flipkart</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              {Nav_Items.map((item, index) => (
                <Box
                  key={`${item.name}-${index}`}
                  cursor="pointer"
                  display="flex"
                  flexDirection="row"
                  gap="10px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    alt={item.name}
                    src={item.image}
                    width={60}
                    height={70}
                  />
                  <Text
                    _hover={{ color: "#2874f0" }}
                    fontWeight="semibold"
                    textAlign="center"
                  >
                    {item.name}
                  </Text>
                  {/* <Menu>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {item.name}
              </MenuButton>
              {item?.submenu?.map((menu) => (
                <MenuList>
                  <MenuItem>{menu.name}</MenuItem>
                </MenuList>
              ))}
            </Menu> */}
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Spacer />
      <HStack w="60%" cursor="pointer">
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
      <Spacer />
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
      <Spacer />
      <Box>
        <Menu>
          <MenuButton aria-label="Options" variant="outline">
            <Avatar
              cursor="pointer"
              size="sm"
              src="https://bit.ly/broken-link"
            />
          </MenuButton>
          <MenuList zIndex={9}>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘T">New Tab</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
