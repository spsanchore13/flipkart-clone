"use client";

import { useEffect } from "react";
import Filters from "@/components/ProductPage/Filters";
import { Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/App/action";
import ProductCard from "@/components/ProductPage/ProductCard";

const ProductPage = () => {
  const state = useSelector((store) => store.App);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Stack p={5} display="flex" flexDirection="row" gap={10}>
      <Filters />
      <Stack w="100%">
        {state.products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductPage;
