import React from "react";

type Props = {
  children: React.ReactNode;
};

type HeroElementProps = {
  children: React.ReactNode;
};
type HeroSubtitleProps = {
  children: React.ReactNode;
};

export const HeroTitle = ({ children }: HeroElementProps) => (
  <h1 className="text-5xl my-6">{children}</h1>
);

export const HeroSubtitle = ({ children }: HeroSubtitleProps) => (
  <p className="text-lg mb-12">{children}</p>
);

const Hero = ({ children }: Props) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;
