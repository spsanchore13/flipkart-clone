import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Help = ({ menu }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex gap={10} w="60%" flexDirection={isLargerThan768 ? "row" : "column"}>
      {menu?.map((item, index) => (
        <Box key={index} display="flex" flexDirection="column" rowGap={2}>
          <Heading fontSize="18px" color="#77797b">
            {item.menu}
          </Heading>
          {item.submenu.map((el, i) => (
            <Link
              key={`${el.name}-${i}`}
              display="block"
              color="white"
              href={el.href}
            >
              {el.name}
            </Link>
          ))}
        </Box>
      ))}
    </Flex>
  );
};

export default Help;
