import { render, screen } from "@testing-library/react";
import React from "react";
import AdminApp from "../src/AdminApp";
const show = true;

describe("group", () => {
  it("should render without arguments", () => {
    render(<AdminApp show={show} />);
    const label = screen.getByLabelText("Account Name");

    expect(label).toBeInTheDocument();
  });
});
