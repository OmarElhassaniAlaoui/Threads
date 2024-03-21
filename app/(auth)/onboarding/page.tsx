import AccountProfile from "@/components/forms/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";

export default async  function Onboarding() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = {
    _id: user.id,
    username: user.username ,
    name: user.firstName ,
    bio:  "bio" ,
    image: user.imageUrl ,
  };

  

  const userData = {
    id:user.id,
    objectId: userInfo?._id,
    username:  userInfo?.username || user.username,
    name: userInfo?.name || user.firstName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complet your profile know to use Threads{" "}
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user= {{
          id:userData.id,
          objectId: userData.objectId,
          username: userData.username ?? "",
          name: userData.name ?? "",
          bio: userData.bio,
          image: userData.image,
        }} btnTitle="Continue"/>  
      </section>
    </main>
  );
}
