import React from "react";
import { StoreContextProvider } from "./context/StoreContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreContextProvider>{children}</StoreContextProvider>;
};

export default Providers;
