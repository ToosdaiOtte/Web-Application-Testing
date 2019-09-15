import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("App renders without crashing", () => { 
  render(<App />)
});

test("verify home and away teams are present", () => {

  const container = render(<App />);
  container.getByText("Mets");
  container.getByText("Astros");

});

test("verify ball and stike count is present", () => {

  const container = render(<App />);
  // Act (case insensitive)
  container.getByTestId(/ball/i);
  container.getByTestId(/strike/i);
});
