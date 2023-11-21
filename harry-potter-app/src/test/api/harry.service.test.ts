import axios from "axios";
import { getCharacters } from "../../api/harry.service";

const listMock = [
  { id: 1, name: "junior" },
  { id: 2, name: "junior" },
];

test("should return mockList", async () => {
  axios.get = jest.fn().mockResolvedValue({ data: listMock });
  const characters = await getCharacters();

  expect(characters).toEqual(listMock);
});

it("handles error when fetching characters", async () => {
  const errorMessage = "Failed to fetch characters";
  axios.get = jest.fn().mockRejectedValue(new Error(errorMessage));

  await expect(getCharacters()).rejects.toThrow(errorMessage);
});
