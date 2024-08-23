import { HttpResponse, http } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import React from "react";
import UserList from "../src/component/UserList";
import server from "../src/mocks/server";

// Start the server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// Close the server after all tests
afterAll(() => server.close());
// Reset request handlers after each test
afterEach(() => server.resetHandlers());
describe("UserList", () => {
  it("should display users from the API", async () => {
    server.use(
      http.get("https://dummyjson.com/users", () => {
        return HttpResponse.json({
          users: [
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Smith", email: "jane@example.com" },
          ],
        });
      })
    );
    render(<UserList />);
    // Wait for and verify that users are displayed
    await waitFor(() => {
      expect(
        screen.getByText("John Doe (john@example.com)")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Jane Smith (jane@example.com)")
      ).toBeInTheDocument();
    });
  });
  it("should display error message when API request fails", async () => {
    server.use(
      http.get("https://dummyjson.com/users", () => {
        return HttpResponse.error();
      })
    );
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText("Failed to fetch users")).toBeInTheDocument();
    });
  });
});
