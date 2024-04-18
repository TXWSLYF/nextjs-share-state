"use client";
import { createContext, useState } from "react";

export const yourContext = createContext<{
  name: string;
  setName: (name: string) => void;
}>({ name: "", setName: () => {} });

const Store = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("alex");

  return (
    <yourContext.Provider value={{ name, setName }}>
      {children}
    </yourContext.Provider>
  );
};

export default Store;
