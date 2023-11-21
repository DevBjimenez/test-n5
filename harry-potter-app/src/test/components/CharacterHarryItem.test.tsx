import { render, screen } from "@testing-library/react";
import { CharacterHarryItem } from "../../Components/CharacterHarryItem";

const mockItem = {
  name: "Mock name",
  gender: "female",
  status: "Alive",
  image: "test",
};
test("should render item data", () => {
  render(<CharacterHarryItem {...mockItem} />);
  const title = screen.getByTestId("itemtitle");
  const imgurl = screen.getByRole("img");
  const gender = screen.getByTestId("gender");
  expect(title.textContent).toEqual(mockItem.name);
  expect(imgurl.getAttribute("src")).toEqual(mockItem.image);
  expect(gender.textContent).toMatch(/: female/i);
});
