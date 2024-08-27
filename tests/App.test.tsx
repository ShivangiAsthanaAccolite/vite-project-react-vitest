import { render, screen } from "@testing-library/react";

import App from "../src/App";
import { expect } from "vitest";
import { myTest } from "./my-test.js";

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

myTest("add items to todos", ({ todos }) => {
  expect(todos.length).toBe(3);

  todos.push(4);
  expect(todos.length).toBe(4);
});

myTest("move items from todos to archive", ({ todos, archive }) => {
  expect(todos.length).toBe(3);
  expect(archive.length).toBe(0);

  archive.push(todos.pop());
  expect(todos.length).toBe(2);
  expect(archive.length).toBe(1);
});
