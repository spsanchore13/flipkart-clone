import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HomePageSlider = ({ type }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <Button
        p={0}
        py={isLargerThan768 ? 10 : 5}
        borderRadius="none"
        backgroundColor="red"
        borderTopStartRadius="5px"
        borderBottomStartRadius="5px"
        onClick={() => onClick()}
      >
        <ChevronRightIcon boxSize={isLargerThan768 ? 10 : 5} />
      </Button>
    );
  };

  return (
    <Stack
      zIndex={4}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      display="flex"
      flexDirection="row"
      m={10}
      p={3}
    >
      <VStack w="20%" justify="center" spacing="20px">
        <Heading fontWeight="400" textAlign="center">
          {type}
        </Heading>
        <Button
          backgroundColor="#1877f2"
          color="white"
          borderRadius="5px"
          px={5}
        >
          View All
        </Button>
      </VStack>
      <Box w="80%">
        <Carousel
          // customRightArrow={<CustomRightArrow />}
          swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
          <Box boxSize="220px" cursor="pointer">
            <Text>Item 1</Text>
            <Image
              _hover={{ transform: "scale(1.1)" }}
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000"
              alt="product"
            />
          </Box>
        </Carousel>
      </Box>
    </Stack>
  );
};

export default HomePageSlider;
