import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className=" w-full min-h-screen flex items-center justify-center bg-gradient-to-tl from-purple-500 to-red-500 p-2">
      {children}
    </section>
  );
};

export default Container;
