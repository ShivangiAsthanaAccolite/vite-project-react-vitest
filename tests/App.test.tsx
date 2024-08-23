import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("App component snapshot test", () => {
    const { asFragment } = render(<App />);
    // Create a snapshot of the component's output
    expect(asFragment()).toMatchSnapshot();
  });
});
