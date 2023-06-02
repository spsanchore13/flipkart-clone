import {
  Text,
  Button,
  Stack,
  Box,
  Heading,
  VStack,
  Input,
  Link,
  Image,
} from "@chakra-ui/react";

const Register = ({ setIsNewUser }) => {
  return (
    <Stack borderRadius={10} h="500px" display="flex" flexDirection="row">
      <VStack
        borderRadius={5}
        backgroundColor="#2874f0"
        w="40%"
        h="100%"
        py={10}
        px={10}
      >
        <VStack justify="space-between" h="100%">
          <Box>
            <Heading color="white">Looks like you're new here!</Heading>
            <Text color="white" mt={4} fontWeight="semibold">
              Sign up with your mobile number to get started
            </Text>
          </Box>
          <Box>
            <Image
              w="180px"
              h="130px"
              src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
              alt="logo"
            />
          </Box>
        </VStack>
      </VStack>
      <VStack justify="space-between" p={10}>
        <VStack spacing={5}>
          <Input type="text" variant="flushed" placeholder="Name" />
          <Input type="email" variant="flushed" placeholder="Email" />
          <Input type="password" variant="flushed" placeholder="Password" />
          <Input
            type="password"
            variant="flushed"
            placeholder="Confirm Password"
          />
          <Text>
            By continuing, you agree to Flipkart's
            <Link ml={2} color="#1877f2">
              Terms of Use and Privacy Policy.
            </Link>
          </Text>
          <Button
            w="100%"
            _hover={{ backgroundColor: "#fb641b" }}
            color="white"
            backgroundColor="#fb641b"
          >
            Sign Up
          </Button>

          <Button
            w="100%"
            _hover={{ backgroundColor: "#ffeaa7" }}
            color="black"
            onClick={() => setIsNewUser(false)}
            backgroundColor="#ffeaa7"
          >
            Existing User ? Log In
          </Button>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default Register;
