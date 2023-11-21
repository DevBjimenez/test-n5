import * as React from "react";
import { getCharacters } from "../api/ricky.service";
import { Character } from "../api/types.ricky";
import { Container, SectionList } from "./CharacterList.styled";
import CharacterItem from "./CharacterItem";

interface ICharacterListProps {}

const CharacterList: React.FunctionComponent<ICharacterListProps> = (props) => {
  const [characters, setcharacters] = React.useState<Character[]>([]);
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
          <CharacterItem key={character.id} {...character} />
        ))}
      </SectionList>
    </Container>
  );
};

export default CharacterList;
