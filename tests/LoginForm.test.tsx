import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import LoginForm from "../src/component/LoginForm";
import userEvent from "@testing-library/user-event";

describe("LoginForm", () => {
  beforeEach(() => {
    // Render the LoginForm component before each test
    render(<LoginForm />);

    // Mock the alert function
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  test("should fill in the login form and submit", async () => {
    // Get form elements
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByText("Login");

    // Use @testing-library/user-event to interact with the form
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    // Simulate click on the login button
    await userEvent.click(loginButton);

    // Expect the alert to be called with the correct message
    expect(window.alert).toHaveBeenCalledWith(
      "Login successful for test@example.com"
    );
  });
});
