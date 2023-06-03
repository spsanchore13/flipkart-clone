import Cart from "@models/cart";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    connectToDB();

    const cartItems = await Cart.find({ userId: params.userId });

    return new Response(JSON.stringify(cartItems), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const POST = async (req, { params }) => {
  const { productId, quantity, price } = await req.json();

  try {
    connectToDB();

    let cart = await Cart.findOne({ userId: params.userId });

    if (!cart) {
      cart = new Cart({ userId: params.userId });
    }

    // Check if the item is already in the cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      // If the item already exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      cart.items.push({ productId, quantity, price });
    }

    // Update the total price of the cart
    cart.total += quantity * price;

    // Save the cart

    await cart.save();

    console.log(cart);
    return new Response("Item added to cart successfully");
  } catch (error) {
    return new Response("Unable to add item to cart");
  }
};
