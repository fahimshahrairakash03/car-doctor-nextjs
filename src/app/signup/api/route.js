import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something went Wrong", error },
      { status: 500 }
    );
  }
};
