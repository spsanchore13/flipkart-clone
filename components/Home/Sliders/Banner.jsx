import Carousel from "nuka-carousel";
import {
  AspectRatio,
  Box,
  Button,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const HomeSlider = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Carousel
      autoplay="true"
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <Button
          borderRadius="none"
          borderTopEndRadius="5px"
          borderBottomEndRadius="5px"
          p={0}
          py={isLargerThan768 ? 10 : 5}
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          <ChevronLeftIcon boxSize={isLargerThan768 ? 10 : 5} />
        </Button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <Button
          p={0}
          py={isLargerThan768 ? 10 : 5}
          borderRadius="none"
          borderTopStartRadius="5px"
          borderBottomStartRadius="5px"
          onClick={nextSlide}
          disabled={nextDisabled}
        >
          <ChevronRightIcon boxSize={isLargerThan768 ? 10 : 5} />
        </Button>
      )}
    >
      <Box>
        <AspectRatio maxW="100%" ratio={6 / 1}>
          <Image
            alt="banner"
            objectFit="cover"
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/f68a68591f7bf55d.jpg?q=50"
          />
        </AspectRatio>
      </Box>

      <Box>
        <AspectRatio maxW="100%" ratio={6 / 1}>
          <Image
            alt="banner"
            objectFit="cover"
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/a1d93b6bc446790d.jpg?q=50"
          />
        </AspectRatio>
      </Box>
      <Box>
        <AspectRatio maxW="100%" ratio={6 / 1}>
          <Image
            alt="banner"
            objectFit="cover"
            src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/bada3904b2749464.jpg?q=50"
          />
        </AspectRatio>
      </Box>
    </Carousel>
  );
};

export default HomeSlider;
