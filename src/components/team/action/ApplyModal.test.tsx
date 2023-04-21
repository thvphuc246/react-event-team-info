import { fireEvent, render, screen } from "@testing-library/react";
import ApplyModal from "./ApplyModal";

describe("ApplyModal component", () => {
  beforeEach(() => {
    render(<ApplyModal />);
  });

  it("should render the Apply button", () => {
    const applyButton = screen.getByText(/Apply/i);
    expect(applyButton).toBeInTheDocument();
  });

  it("should open the modal when the Apply button is clicked", () => {
    const applyButton = screen.getByText(/Apply/i);
    fireEvent.click(applyButton);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("should close the modal when the Send Application button is clicked", () => {
    const applyButton = screen.getByText(/Apply/i);
    fireEvent.click(applyButton);
    const modal = screen.queryByRole("dialog");
    expect(modal).toBeInTheDocument();

    const sendButton = screen.getByText(/Send Application/i);
    fireEvent.click(sendButton);
    expect(modal).not.toBeInTheDocument();
  });
});
