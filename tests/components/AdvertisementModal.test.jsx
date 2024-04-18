import { render, screen } from "@testing-library/react";
import React from "react";
import AdvertisementModal from "../../src/components/AdvertisementModal";

it("should render the top button ", () => {
  render(<AdvertisementModal />);

  const button = screen.queryAllByRole("Button");

  expect(button).toBeDefined();
});
