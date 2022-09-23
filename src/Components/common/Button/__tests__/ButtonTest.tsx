import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Button from "../Button";

describe("Button", () => {
  test("renders Button and check if its clicked", async() => {
    render(<Button className='s'>Test</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    
  });
});
