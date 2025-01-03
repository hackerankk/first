import React, { useContext } from "react";
import { NameContext } from "../context/NameContext";

const card = () => {
  const { name } = useContext(NameContext);
  console.log(name);
  return <div></div>;
};

export default card;
