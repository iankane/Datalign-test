import { render, screen } from "@testing-library/react";
import React from "react";
import CustomerApp from "../src/CustomerApp";

const show = true;
it("should render the top button ", () => {
  render(<CustomerApp show={show} />);

  const button = screen.queryAllByRole("Button");

  expect(button).toBeDefined();
});
