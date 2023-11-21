import * as React from "react";
import { Container, SectionList } from "./CharacterHarryList.styled";
import { CharacterHarryItem } from "./CharacterHarryItem";
import { getCharacters } from "../api/harry.service";
import { HarryPotterCharacter } from "../api/harry.type";

export interface IAppProps {}

export function CharacterHarryList(props: IAppProps) {
  const [characters, setcharacters] = React.useState<HarryPotterCharacter[]>(
    []
  );
  const getCharactersRequest = async () => {
    try {
      const result = await getCharacters();
      setcharacters(result);
    } catch (error) {}
  };

  React.useEffect(() => {
    getCharactersRequest();
  }, []);
  return (
    <Container>
      <SectionList>
        {characters.map((character) => (
          <CharacterHarryItem key={character.id} {...character} />
        ))}
      </SectionList>
    </Container>
  );
}
