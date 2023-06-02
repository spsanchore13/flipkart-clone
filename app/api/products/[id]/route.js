import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const product = await Product.findOne({ productId: params.id });
    return new Response(JSON.stringify(product));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
