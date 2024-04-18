import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("group", () => {
  it("should render without arguments", () => {
    render(<App />);
    const label = screen.getByLabelText("Account Name");

    expect(label).toBeInTheDocument();
  });
});
