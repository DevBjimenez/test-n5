import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "../../components/CharacterList";
const listmock = [
  { id: 1, name: "Character 1" },
  { id: 2, name: "Character 2" },
];
jest.mock("../api/ricky.service", () => {
  return {
    getCharacters: jest.fn().mockImplementation(() => listmock),
  };
});
test("should render CharacterList Component", async () => {
  render(<CharacterList />);
  await waitFor(() => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(listmock.length);
  });
});
