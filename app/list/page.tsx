"use client";

import { yourContext } from "@/store";
import Link from "next/link";
import { useContext } from "react";

const Page = () => {
  const { name, setName } = useContext(yourContext);

  return (
    <div>
      <div>共享的name {name}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return (
          <div key={i} onClick={() => {setName(`product ${i}`)}}>
            <Link href={`/product/${i}`}>product {i}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
