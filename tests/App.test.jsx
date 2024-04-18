import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("group", () => {
  it("should render without arguments", () => {
    render(<App />);
    const label = screen.getByLabelText("Account Name");

    expect(label).toBeInTheDocument();
  });

  it("should render both buttons ", () => {
    render(<App />);

    const button = screen.queryAllByRole("button");

    expect(button).toBeDefined();
    expect(button).toHaveLength(2);
  });
});
