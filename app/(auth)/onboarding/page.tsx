import AccountProfile from "@/components/shared/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";
export default async  function Onboarding() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = {};
  

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username:  userInfo?.username || user.username,
    name:  userInfo?.name || "",
    bio:  userInfo?.bio || "",
    image:userInfo?.image || user.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complet your profile know to use Threads{" "}
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user= {userData} btnTitle="Continue"/>  
      </section>
    </main>
  );
}
