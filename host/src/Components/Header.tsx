import React, { ChangeEvent } from "react";
import {
  HeaderStyled,
  Button,
  LanguageSwitch,
  Li,
  Nav,
  Ul,
  SelectLanguage,
} from "./Header.styled";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../config/types";
import { NavLink } from "react-router-dom";
interface IHeader {
  handleLanguage: (value: LANGUAGES) => void;
  language?: LANGUAGES;
}
const Header = ({ language, handleLanguage }: IHeader) => {
  const { t } = useTranslation();

  const handleLanguageChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    handleLanguage(value as LANGUAGES);
  };

  return (
    <HeaderStyled>
      <Nav>
        <Ul>
          <Li>
            <NavLink to="/">
              <Button>Inicio</Button>
            </NavLink>
          </Li>
          <Li>
            <NavLink to={"/harry"}>
              <Button>Harry Potter</Button>
            </NavLink>
          </Li>
          <Li>
            <NavLink to={"/rick"}>
              <Button>Ricky morty</Button>
            </NavLink>
          </Li>
        </Ul>
      </Nav>
      <LanguageSwitch>
        <label data-testid="dropdownLabel" htmlFor="language">
          {t("language")}
        </label>
        <SelectLanguage
          value={language}
          onChange={handleLanguageChange}
          id="language"
        >
          {Object.entries(LANGUAGES).map(([lang, planLang]) => (
            <option key={lang} value={planLang}>
              {t(planLang)}
            </option>
          ))}
        </SelectLanguage>
      </LanguageSwitch>
    </HeaderStyled>
  );
};

export default Header;
