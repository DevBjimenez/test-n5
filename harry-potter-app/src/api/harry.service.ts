import axios from "axios";
import { CHARACTERS_URL, HarryPotterCharacter } from "./harry.type";
export const getCharacters = async () => {
  try {
    const { data } = await axios.get<HarryPotterCharacter[]>(CHARACTERS_URL);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error, error as ErrorOptions);
  }
};
