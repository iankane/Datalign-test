import { render, screen } from "@testing-library/react";
import React from "react";
import AdvertisementDetails from "../../src/components/AdvertisementDetails";

describe("group", () => {
  const i = 0;
  const accountName = "Ian";
  const ad = {
    account: "Ian",
    name: "Test Ad",
    text: "Testing the ads",
    textColor: "#FFFFFF",
    size: 12,
    backgroundColor: "#000000",
    active: true,
  };

  it("should render when the accountName matches", () => {
    render(
      <AdvertisementDetails ad={ad} n={i} key={i} customer={accountName} />
    );
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("accordion-header");
  });

  it("should not render when the account name doesn't match", () => {
    let accountName = "dan";
    render(
      <AdvertisementDetails ad={ad} n={i} key={i} customer={accountName} />
    );
    const heading = screen.queryByText(accountName);
    expect(heading).toBeNull();
  });
});
