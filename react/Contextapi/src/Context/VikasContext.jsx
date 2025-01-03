import React, { createContext } from "react";

export const VikasContext = createContext();

function XYZ(props) {
  const obj = {
    name: "Viky",
  };
  return (<VikasContext.Provider value={obj}>{props.children}</VikasContext.Provider>)
}

export default XYZ;
