import React, { FC, PropsWithChildren } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px gray solid" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
