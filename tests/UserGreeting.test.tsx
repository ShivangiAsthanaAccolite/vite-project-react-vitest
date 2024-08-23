import * as userService from "../src/service/userService";

import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import React from "react";
import { UserGreeting } from "../src/component/UserGreeting";

describe("UserGreeting", () => {
  it("should display user name when getUser resolves", async () => {
    // Mocking the getUser function to return a specific user
    vi.spyOn(userService, "getUser").mockResolvedValue({ name: "Jane Doe" });
    await act(async () => {
      render(<UserGreeting />);
    });
    // Check if the component eventually renders the correct name
    await waitFor(() => {
      expect(screen.getByText("Hello, Jane Doe!")).toBeInTheDocument();
    });
    // Restore the original implementation after the test
    console.log(
      "Is mocked before restore:",
      vi.isMockFunction(userService.getUser)
    ); // true
    vi.restoreAllMocks();
    console.log(
      "Is mocked after restore:",
      vi.isMockFunction(userService.getUser)
    ); // false
  });
  it('should display "Guest" when getUser rejects', async () => {
    // Mocking the getUser function to reject (simulate an error)
    vi.spyOn(userService, "getUser").mockRejectedValue(
      new Error("Failed to fetch user")
    );
    await act(async () => {
      render(<UserGreeting />);
    });
    // Check if the component eventually renders "Guest"
    await waitFor(() => {
      expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
    });
    // Restore the original implementation after the test
    vi.restoreAllMocks();
  });

  it("should display user gender", async () => {
    vi.mock("./userService", () => ({
      getUser: vi.fn().mockResolvedValue({ name: "Jane Doe" }),
      getUserGender: vi.fn().mockResolvedValue({ gender: "Female" }),
    }));
    await act(async () => {
      render(<UserGreeting />);
    });
    await waitFor(() => {
      expect(screen.getByText("Gender: Female")).toBeInTheDocument();
    });
    vi.restoreAllMocks();
  });
});
