import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignUp from "./index";
import { supabase } from "@/src/utils/supabaseClient";

jest.mock("@/src/utils/supabaseClient", () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
      signInWithPassword: jest.fn()
    }
  }
}));

describe("SignUp", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<SignUp />);
    expect(getByText("Create an account")).toBeInTheDocument();
  });

  it("should handle sign up", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("•••••••••••");
    const signUpButton = getByText("Sign up & login");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: "test@test.com",
        password: "password"
      });
    });
  });
});