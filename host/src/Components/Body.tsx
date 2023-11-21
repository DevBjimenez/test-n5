import React from "react";
interface IBody {
  children: JSX.Element;
}
const Body = ({ children }: Partial<IBody>) => {
  return <section>{children}</section>;
};

export default Body;
