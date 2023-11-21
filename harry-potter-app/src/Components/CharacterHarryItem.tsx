import * as React from "react";
import { Image, Item } from "./CharacterHarryItem.styled";
import { useTranslation } from "react-i18next";

export interface ICharacterHarryItemProps {
  gender: string;
  name: string;
  image: string;
}

export function CharacterHarryItem({
  name,
  gender,
  image,
}: ICharacterHarryItemProps) {
  const { t } = useTranslation();
  return (
    <Item>
      <p data-testid="itemtitle">{name}</p>
      <Image src={image} alt="" />
      <p data-testid="gender">
        {t("gender")}: <span>{t(gender)}</span>
      </p>
    </Item>
  );
}
