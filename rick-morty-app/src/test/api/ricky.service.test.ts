import axios from "axios";
import { Character, Page } from "../../api/types.ricky";
import { getCharacters } from "../../api/ricky.service";

const page: Page = {
  info: { count: 2, next: "", pages: 2, prev: "" },
  results: [
    { id: 1, name: "junior" },
    { id: 2, name: "junior" },
  ] as Character[],
};
test("should return mockList", async () => {
  axios.get = jest.fn().mockResolvedValue({ data: page });
  const characters = await getCharacters();

  expect(characters).toEqual(page.results);
});

it("handles error when fetching characters", async () => {
  const errorMessage = "Failed to fetch characters";
  axios.get = jest.fn().mockRejectedValue(new Error(errorMessage));

  await expect(getCharacters()).rejects.toThrow(errorMessage);
});
