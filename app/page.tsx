"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import mac from "@/public/images/mac.jpg";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
// import HeavyComponent from "./components/HeavyComponent";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  const [isVisible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">
        {/* HellOOO {session && <span>{session.user?.name}</span>} */}
        Hello World
      </h1>
      <Link href="/users">Users</Link>
      {/* <ProductCard/> */}
      <br />
      <button className="btn btn-info" onClick={() => setVisible(!isVisible)}>
        Show
      </button>
      {isVisible && <HeavyComponent />}

      <br />

      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "b" }, { name: "c" }, { name: "a" }];

          console.log(_.orderBy(users, ["name"]));
        }}
      >
        sort
      </button>

      {/* <Image
        src={"https://bit.ly/react-cover"}
        alt={"mac"}
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
