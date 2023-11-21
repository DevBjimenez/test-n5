import React from "react";
import { Image, Item } from "./CharacterItem.styled";
import { useTranslation } from "react-i18next";

type ICharacterProps = {
  gender: string;
  name: string;
  status: string;
  image: string;
};

const CharacterItem = ({ gender, name, status, image }: ICharacterProps) => {
  const { t } = useTranslation();
  return (
    <Item>
      <p data-testid="itemtitle">{name}</p>
      <Image src={image} alt="" />
      <p data-testid="status">
        {t("status")}: <span>{t(status)}</span>
      </p>
      <p data-testid="gender">
        {t("gender")}: <span>{t(gender)}</span>
      </p>
    </Item>
  );
};

export default CharacterItem;
