import { render, screen } from "@testing-library/react";
import React from "react";
import AdminApp from "../src/AdminApp";

describe("group", () => {
  it("should render without arguments", () => {
    render(<AdminApp />);
    const label = screen.getByLabelText("Account Name");

    expect(label).toBeInTheDocument();
  });
});
