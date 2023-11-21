import axios from "axios";
import { CHARACTERS_URL, Page } from "./types.ricky";
export const getCharacters = async () => {
  try {
    const { data } = await axios.get<Page>(CHARACTERS_URL);
    return data.results;
  } catch (error: any) {
    console.log(error);
    throw new Error(error, error as ErrorOptions);
  }
};
