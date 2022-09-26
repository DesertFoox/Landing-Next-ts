import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TextArea from "../TextArea";

describe("TextArea", () => {
  test("renders TextArea and check typing", async () => {
    render(
      <TextArea
        label={"test  label"}
        className={"bg-red"}
        placeholder={"test place holder"}
      />
    );
    const textArea: any = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();
    await userEvent.type(textArea, "typing stupid thing here to test");
    expect(textArea.value).toBe("typing stupid thing here to test");
  });
});
