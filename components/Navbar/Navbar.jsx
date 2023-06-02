import {
  Box,
  Stack,
  HStack,
  Text,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import SearchBar from "./SearchBar";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import SmallScreenNavbar from "./SmallScreenNavbar";

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
