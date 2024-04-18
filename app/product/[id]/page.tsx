"use client";
import { yourContext } from "@/store";
import { useContext } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { name, setName } = useContext(yourContext);

  return (
    <div>
      <div>共享的name {name}</div>
      <div>product{params.id}</div>
    </div>
  );
};

export default Page;
