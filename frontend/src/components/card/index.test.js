import Card from './index';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

test('Card renders closed initially', () => {
  const cardTitle = `Test_${Math.random().toString().slice(2)}`;
  const cardDescription = `Description_${Math.random().toString().slice(2)}`;
  const cardElement = render(<Card title={cardTitle}> {cardDescription} </Card>);
  // Title
  const titleElement = screen.getByText(cardTitle);
  expect(titleElement).toBeInTheDocument();

  // Description
  const descriptionElement = screen.queryByText(cardDescription);
  expect(descriptionElement).not.toBeInTheDocument();

  // Down Arrow:
  const downArrowElement = cardElement.getByTestId('DownArrow');
  expect(downArrowElement).toBeInTheDocument();
});

test('Card can be opened by clicking the arrow', () => {
  const cardTitle = `Test_${Math.random().toString().slice(2)}`;
  const cardDescription = `Description_${Math.random().toString().slice(2)}`;
  const cardElement = render(<Card title={cardTitle}> {cardDescription} </Card>);
  
  // Down Arrow:
  const downArrowElement = cardElement.getByTestId('DownArrow');
  expect(downArrowElement).toBeInTheDocument();
  
  userEvent.click(downArrowElement, { button: 1 });
  
  // Up Arrow:
  const upArrowElement = cardElement.getByTestId('UpArrow');
  expect(upArrowElement).toBeInTheDocument();

  // Description
  const descriptionElement = screen.getByText(cardDescription);
  expect(descriptionElement).toBeInTheDocument();

});