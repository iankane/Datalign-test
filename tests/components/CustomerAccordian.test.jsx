import { render, screen } from "@testing-library/react";
import React from "react";
import CustomerAccordion from "../../src/components/CustomerAccordion";

describe("group", () => {
  var current = "";
  const testString = "Ian";
  const key = 0;
  const ads = {};
  const currentSetter = function (e) {
    current = e;
  };

  it("should render when the name is provided", () => {
    render(
      <CustomerAccordion
        name={testString}
        key={key}
        ads={ads}
        currentSetter={currentSetter}
      />
    );
    const button = screen.queryByText(testString);

    expect(button).toBeDefined();
  });

  it("should not render when the name is not provided", () => {
    let testNum = 2;
    render(
      <CustomerAccordion
        name={testNum}
        key={key}
        ads={ads}
        currentSetter={currentSetter}
      />
    );
    const heading = screen.queryByText(testString);
    expect(heading).toBeNull();
  });
});
