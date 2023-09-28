import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
