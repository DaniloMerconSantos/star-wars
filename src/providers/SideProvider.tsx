import React, { createContext, useState, useContext } from "react";

interface ISideContext {
  name: string;
  setName: (name: string) => void;
}

const SideContext = createContext<ISideContext>({
  name: "",
  setName: () => {},
});
export const useSide = (): ISideContext => useContext(SideContext);

const SideProvider: React.FC = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <SideContext.Provider value={{ name, setName }}>
      {children}
    </SideContext.Provider>
  );
};

export default SideProvider;
