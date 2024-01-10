import TransactionTable from "@/modules/Transactions/components/TransactionTable";
import "@testing-library/jest-dom"; // Import the jest-dom library for additional matchers
import { render, screen } from "@testing-library/react";
import { beforeEach } from "node:test";
import { useSelector as useSelectorMock } from "react-redux"; // Rename useSelector to avoid conflicts

// Mock the useDispatch and useSelector functions
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the setCurrentPage and setTransactions functions
jest.mock("../src/slices/transactionSlice.tsx", () => ({
  ...jest.requireActual("../src/slices/transactionSlice.tsx"),
  setCurrentPage: jest.fn(),
  setTransactions: jest.fn(),
}));

describe("TransactionTable", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.resetAllMocks();
  });

  it("renders the component correctly", () => {
    // Mock the useSelector to return the desired state
    (useSelectorMock as jest.Mock).mockReturnValue({
      data: [
        /* your mock data here */
      ],
      currentPage: 1,
    });

    render(<TransactionTable />);

    // Add your assertions here
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Transaction ID")).toBeInTheDocument();
    // Add more assertions as needed
  });

  // Other test cases...
});
