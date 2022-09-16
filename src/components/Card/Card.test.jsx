import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it("Should display beer cards", () => {
  render(<Card />);

  const cards = screen.getAllByRole("name", { name: /Name/i });

  expect(cards).toBeInTheDocument();
});
