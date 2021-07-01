import CardSearch from "./CardSearch";
import { render, fireEvent } from "@testing-library/react";

test("All provided cards renders", () => {
  const cards = ["Card #1", "Card #2", "Alice", "Bob"].map(title => ({
    title,
    description: Math.random().toString(36).slice(2),
  }));
  const cardSearchElement = render(<CardSearch cards={cards} />);

  // Cards container
  const cardsContainer = cardSearchElement.getByTestId("card-container");
  expect(cardsContainer.children.length).toEqual(cards.length);
});

test("Renders only cards that matches filter", () => {
  const cards = ["Card #1", "Card #2", "Alice", "Bob"].map(title => ({
    title,
    description: Math.random().toString(36).slice(2),
  }));
  const cardSearchElement = render(<CardSearch cards={cards} />);

  //Input element
  const inputElement = cardSearchElement.getByTestId("search-input");
  fireEvent.change(inputElement, { target: { value: "Card" } });

  const cardsContainer = cardSearchElement.getByTestId("card-container");
  expect(cardsContainer.children.length).toEqual(2);
});
