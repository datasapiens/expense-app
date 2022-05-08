import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import style from "./PageLayout.module.scss";

interface Props {
  children: ReactNode;
}

export const PageLayout = ({ children }: Props) => (
  <div className={style.container}>
    <div className={style.layout}>
      <NavBar />
      <div className={style.content}>{children}</div>
    </div>
  </div>
);
