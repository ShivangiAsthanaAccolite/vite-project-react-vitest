import { render, screen } from "@testing-library/react";

import Home from "../src/component/Home";
import React from "react";

describe("Home", () => {
  it.concurrent.only("renders the Home component", () => {
    render(<Home />);
  });

  it.concurrent.skip("renders the header", () => {
    screen.debug(); // prints out the jsx in the App component unto the command line
    expect(screen.getByText("Home Component")).toBeInTheDocument();
  });

  it.concurrent.only("renders the paragraph", () => {
    screen.debug(); // prints out the jsx in the App component unto the command line
    const paraElement = screen.getByTestId("para");
    expect(paraElement).toBeInTheDocument();
    expect(paraElement).toHaveTextContent(
      "This is paragraph in Home Component"
    );
  });
});
