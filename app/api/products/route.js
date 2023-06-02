import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    connectToDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
