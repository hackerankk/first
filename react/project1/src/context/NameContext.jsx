import { createContext } from "react";

export const NameContext = createContext();

const Codeware = (props) => {
  const name = "Vikas";
  const delivery = 20;
  const value = {
    name,delivery
  };

  return (
    <NameContext.Provider value={value}>{props.children}</NameContext.Provider>
  );
};

export default Codeware;
