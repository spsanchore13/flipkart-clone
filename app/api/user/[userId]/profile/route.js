import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    connectToDB();

    const profile = await User.findById(params.userId, { __v: 0 });

    return new Response(JSON.stringify(profile));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};
