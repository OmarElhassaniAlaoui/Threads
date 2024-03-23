"use server";
import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDatabase } from "../mongoose"; 

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path,
}:Params): Promise<void> {
  connectToDatabase();
  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        path,
      },
      { upsert: true } // upsert is
    );

    if ((path = "/profile/edit")) {
      revalidatePath(path);
    }
  } catch (error) {
    console.error("Error updating user", error);
    throw new Error("Error updating user");
  }
}

export async function fetchUser(userId: string){
  try {
    connectToDatabase();
    const user = await User.findOne({ id: userId });
    return user;
  }
  catch (error) {
    console.error("Error fetching user", error);
    throw new Error("Error fetching user");
  }

}