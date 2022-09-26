import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import FormInput from "../FormInput";

describe("FormInput", () => {
  test("renders FormInput and check if typing works", async () => {
    render(
      <FormInput
        type={"text"}
        placeholder={"testing placeHolder"}
      >
        firstname
      </FormInput>
    );
    const formInput: any = screen.getByRole("textbox");
    expect(formInput).toBeInTheDocument();
    await userEvent.type(formInput, "typing stupid thing here to test");
    expect(formInput.value).toBe("typing stupid thing here to test");
  });
});
