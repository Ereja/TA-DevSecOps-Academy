import CardSearch from "./CardSearch";
import { render, fireEvent, screen } from "@testing-library/react";

test("All provided cards renders", () => {
  const cards = ["Card #1", "Card #2", "Alice", "Bob"].map(title => ({
    title,
    description: Math.random().toString(36).slice(2),
  }));
  const cardSearchElement = render(<CardSearch cards={cards} />);

  // Cards container
  const cardsContainer = cardSearchElement.getByTestId("card-container");
  expect(cardsContainer.children.length).toEqual(cards.length);

  // Check if correct cards are on the screen
  const cardOneElement = screen.getByText("Card #1");
  expect(cardOneElement).toBeInTheDocument();

  const cardTwoElement = screen.getByText("Card #2");
  expect(cardTwoElement).toBeInTheDocument();
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
