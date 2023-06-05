"use client";

import Footer from "@/components/Footer/Footer";
import FlipkartInfo from "@/components/Home/FlipkartInfo";
import HomeSlider from "@/components/Home/Sliders/Banner";
import HomePageSlider from "@/components/Home/Sliders/HomeProducts";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  
  return (
    <Stack mt="20px" spacing={10}>
      <HomeSlider />
      <HomePageSlider type="Best of Electronics" />
      <HomePageSlider type="Beauty, Food, Toys & more" />
      <HomePageSlider type="Home Specials" />
      <HomePageSlider type="Fashion Top Deals" />
      <FlipkartInfo />
      <Footer />
    </Stack>
  );
}
