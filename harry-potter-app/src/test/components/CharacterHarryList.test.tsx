import { render, screen, waitFor } from "@testing-library/react";
import { CharacterHarryList } from "../../Components/CharacterHarryList";

const listmock = [
  { id: 1, name: "Character 1" },
  { id: 2, name: "Character 2" },
];
jest.mock("../../api/harry.service.ts", () => {
  return {
    getCharacters: jest.fn().mockImplementation(() => listmock),
  };
});
test("should render CharacterHarryList Component", async () => {
  render(<CharacterHarryList />);
  await waitFor(() => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(listmock.length);
  });
});
