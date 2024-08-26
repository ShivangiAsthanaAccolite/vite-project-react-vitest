import { describe, expect, test } from "vitest";
// MyComponent.test.tsx
import { render, screen, waitFor } from "@testing-library/react";

import MyComponent from "../src/component/MyComponent";

// Mock fetch to simulate network response
global.fetch = async () => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));
  return {
    ok: true,
    json: async () => ({ message: "Hello, world!" }),
  } as Response;
};

describe("MyComponent", () => {
  //   test(
  //     "should display data after fetching",
  //     async () => {
  //       // Render the component
  //       render(<MyComponent />);
  //       // Wait for the text to be displayed
  //       await waitFor(
  //         () => {
  //           expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  //         },
  //         { timeout: 5000 }
  //       );
  //     },
  //     { retry: 3 }
  //   ); // Retry option added here

  test("should eventually display fetched data", async () => {
    // Render the component
    render(<MyComponent />);

    // Use expect.poll with options to configure timeout and interval
    await expect
      .poll(() => document.querySelector("div")?.textContent, {
        timeout: 5000, // 5 seconds timeout
        interval: 100, // Poll every 100ms
      })
      .toBe("Hello, world!");
  });
});
