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
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const Login = ({ setIsNewUser }) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

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
            <Heading color="white">Login</Heading>
            <Text color="white" mt={4} fontWeight="semibold">
              Get access to your Orders, Wishlist and Recommendations
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
          <Input type="email" variant="flushed" placeholder="Enter Email" />
          <Input type="password" variant="flushed" placeholder="Password" />
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
            Login
          </Button>

          {providers &&
            Object.values(providers).map((provider) => (
              <Button
                key={provider.id}
                w="100%"
                _hover={{ backgroundColor: "#ffeaa7" }}
                color="black"
                backgroundColor="#ffeaa7"
                onClick={() => signIn(provider.id)}
                rightIcon={<FcGoogle size="24px" />}
              >
                Continue With Google
              </Button>
            ))}
        </VStack>
        <Button
          variant="link"
          color="#1877f2"
          onClick={() => setIsNewUser(true)}
        >
          New to Flipkart? Create an account
        </Button>
      </VStack>
    </Stack>
  );
};

export default Login;
