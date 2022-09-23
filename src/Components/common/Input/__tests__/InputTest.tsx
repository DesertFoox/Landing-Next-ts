import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Input from "../Input";

describe("Input", () => {
  test("renders Input and check typing", async () => {
    render(
      <Input
        type={"text"}
        placeholder="test place holder"
        className="text-red"
      />
    );
    const input: any = screen.getByRole("textbox");
    await userEvent.type(input, "typing stupid thing here to test");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("typing stupid thing here to test");
  });
});
