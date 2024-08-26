import { render, screen } from "@testing-library/react";

import About from "../src/component/About";
import React from "react";

describe("About", () => {
  it("renders the About component", () => {
    render(<About />);
    screen.debug(); // prints out the jsx in the App component unto the command line
    expect(screen.getByText("About Component")).toBeInTheDocument();
  });

  it("renders button and input element", () => {
    render(<About />);
    expect(screen.getByTestId("button")).toBeDisabled();

    const input = screen.getByTestId("element-to-focus");

    input.focus();
    expect(input).toHaveFocus();
  });
});

describe.todo("unimplemented suite");

// An entry will be shown in the report for this test
describe("suite", () => {
  it.todo("unimplemented test");
});
