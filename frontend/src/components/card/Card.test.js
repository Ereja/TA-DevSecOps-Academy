import Card from "./Card";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Card renders closed initially", () => {
  const cardTitle = `Test_${Math.random().toString().slice(2)}`;
  const cardDescription = `Description_${Math.random().toString().slice(2)}`;
  const cardElement = render(
    <Card title={cardTitle} description={cardDescription} />
  );
  // Title
  const titleElement = screen.getByText(cardTitle);
  expect(titleElement).toBeInTheDocument();

  // Description
  const descriptionElement = screen.getByText(cardDescription);
  expect(descriptionElement).not.toHaveClass("card-expanded");

  // Down Arrow:
  const downArrowElement = cardElement.getByTestId("DownArrow");
  expect(downArrowElement).toBeInTheDocument();
});

test("Card can be opened by clicking the arrow", () => {
  const cardTitle = `Test_${Math.random().toString().slice(2)}`;
  const cardDescription = `Description_${Math.random().toString().slice(2)}`;
  const cardElement = render(
    <Card title={cardTitle} description={cardDescription} />
  );

  // Down Arrow:
  const downArrowElement = cardElement.getByTestId("DownArrow");
  expect(downArrowElement).toBeInTheDocument();

  userEvent.click(downArrowElement, { button: 1 });

  // Up Arrow:
  const upArrowElement = cardElement.getByTestId("UpArrow");
  expect(upArrowElement).toBeInTheDocument();

  // Description
  const descriptionElement = screen.getByText(cardDescription);
  expect(descriptionElement).toHaveClass("card-expanded");
});
