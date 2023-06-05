import {
  HStack,
  Input,
  Stack,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

const PersonalInfo = ({ user }) => {
  return (
    <Stack w="100%" spacing={5}>
      <Text fontSize="22px" fontWeight="semibold">
        Personal Information
      </Text>
      <HStack w="100%">
        <Input value={user?.name.split(" ")[0]} disabled="true" />
        <Input value={user?.name.split(" ")[1]} disabled="true" />
      </HStack>
      <VStack w="50%" align="start">
        <Text fontSize="22px" fontWeight="semibold">
          Email Address
        </Text>
        <Input value={user?.email} disabled="true" />
      </VStack>
      <VStack w="50%" align="start">
        <Text fontSize="22px" fontWeight="semibold">
          Mobile Number
        </Text>
        <Input value="9784102014" disabled="true" />
      </VStack>

      <Button colorScheme="blue" w="50%">
        Edit
      </Button>

      {/* <Stack justifyContent="center" alignItems="center">
        <Image boxSize="150px" src={user?.image} alt="profile-img" />
      </Stack> */}
    </Stack>
  );
};

export default PersonalInfo;
