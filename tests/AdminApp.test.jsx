import { render, screen } from "@testing-library/react";
import React from "react";
import AdminApp from "../src/AdminApp";
import { startMirage } from "../src/services/exampleServer";
const show = true;

describe("group", () => {
  it("should render without arguments", () => {
    startMirage();
    render(<AdminApp show={show} />);
    const label = screen.getByLabelText("Account Name");

    expect(label).toBeInTheDocument();
  });
});
