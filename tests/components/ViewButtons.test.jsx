import { render, screen } from "@testing-library/react";
import React from "react";
import ViewButtons from "../../src/components/ViewButtons";

it("should render both buttons ", () => {
  render(<ViewButtons />);

  const button = screen.queryAllByRole("button");

  expect(button).toBeDefined();
  expect(button).toHaveLength(2);
});
