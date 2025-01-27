import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User Exist" }, { status: 304 });
    }
    const hashPass = bcrypt.hashSync(newUser.password, 14);

    const res = await userCollection.insertOne({
      ...newUser,
      password: hashPass,
    });
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something went Wrong", error },
      { status: 500 }
    );
  }
};
