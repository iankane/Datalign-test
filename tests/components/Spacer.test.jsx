import { render, screen } from "@testing-library/react";
import React from "react";
import Spacer from "../../src/components/Spacer";

const space = "10px";
it("should render the top button ", () => {
  render(<Spacer size={space} />);

  const spacerEle = screen.queryAllByRole("separator");

  expect(spacerEle).toBeDefined();
});
