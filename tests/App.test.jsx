import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("group", () => {
  it("should render all three buttons ", () => {
    render(<App />);

    const button = screen.queryAllByRole("button");

    expect(button).toBeDefined();
    expect(button).toHaveLength(3);
  });
});
