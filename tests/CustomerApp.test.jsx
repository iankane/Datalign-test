import { render, screen } from "@testing-library/react";
import React from "react";
import CustomerApp from "../src/CustomerApp";

const show = true;
it("should display an error if there isn't an ad on the server ", () => {
  render(<CustomerApp show={show} />);

  const text = screen.queryAllByRole("text");

  expect(text).toBeDefined();
});
