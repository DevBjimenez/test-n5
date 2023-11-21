import { render, screen } from "@testing-library/react";
import CharacterItem from "../../components/CharacterItem";
const mockItem = {
  name: "Mock name",
  gender: "Female",
  status: "Alive",
  image: "test",
};
test("should render item data", () => {
  render(<CharacterItem {...mockItem} />);
  const title = screen.getByTestId("itemtitle");
  const imgurl = screen.getByRole("img");
  const status = screen.getByTestId("status");
  const gender = screen.getByTestId("gender");
  expect(title.textContent).toEqual(mockItem.name);
  expect(imgurl.getAttribute("src")).toEqual(mockItem.image);
  expect(status.textContent).toMatch(/: alive/i);
  expect(gender.textContent).toMatch(/: female/i);
});
