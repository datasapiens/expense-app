import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className={style.nav}>
      <NavLink to="/">
        <div>{t("headers.transactions")}</div>
      </NavLink>
      <NavLink to="/info">
        <div>{t("headers.graphs")}</div>
      </NavLink>
    </nav>
  );
};
