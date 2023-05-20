import { ReactNode } from "react";
import "./Cardinfo.scss"

interface CardInfoProps {
  children: ReactNode;
  fluid?: boolean;
  color?: string;
}

export default function CardInfo({ children, fluid, color }: CardInfoProps) {
  const classFluid = fluid ? fluid : "";
  const classColor = color ? color : "";
  const classNamesCardInfo = `cardInfo ${classFluid} ${classColor}`;

  return <div className={classNamesCardInfo}>{children}</div>;
}

