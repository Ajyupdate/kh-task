// components/Table.tsx
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
interface MockData {
  id: number;
  amount: string;
  transactionId: string;
  transactionType: string;
  date: string;
  time: string;
  status: string;
}

const mockData: MockData[] = [
  {
    id: 1,
    amount: "₦43,6444",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 2,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "Feb 12, 2022",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 3,
    amount: "₦43,644",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 4,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "2022-01-02",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 5,
    amount: "₦43,644",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 6,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "Feb 12, 2022",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 7,
    amount: "₦43,644",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 8,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "Feb 12, 2022",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 9,
    amount: "₦43,644",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 10,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "Feb 12, 2022",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 11,
    amount: "₦43,6445",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
  {
    id: 12,
    amount: "₦35,471",
    transactionId: "TR_8401857902",
    transactionType: "TR_8401857902",
    date: "Feb 12, 2022",
    time: "12:45 PM",
    status: "Failed",
  },
  {
    id: 13,
    amount: "₦43,6445",
    transactionId: "TR_8401857902",
    transactionType: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30 AM",
    status: "Processed",
  },
];
const PAGE_SIZE = 6;
const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedTransactions = mockData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(mockData.length / PAGE_SIZE);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCheckboxHeaderClick = (isChecked: boolean) => {
    // Handle checkbox header click logic here
    console.log("Checkbox header clicked:", isChecked);
  };

  const handleCheckboxRowClick = (isChecked: boolean, id: number) => {
    // Handle checkbox row click logic here
    console.log(`Checkbox for row ${id} clicked:`, isChecked);
  };

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                onChange={(e) => handleCheckboxHeaderClick(e.target.checked)}
              />
            </Th>
            <Th>Amount</Th>
            <Th>Transaction ID</Th>
            <Th>Transaction Type</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody bg={"white"}>
          {paginatedTransactions.map((data) => (
            <Tr key={data.id}>
              <Td>
                <Checkbox
                  onChange={(e) =>
                    handleCheckboxRowClick(e.target.checked, data.id)
                  }
                />
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {data.amount}
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {data.transactionId}
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {data.transactionType}
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {data.date}
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {data.time}
              </Td>
              <Td fontSize={"14px"} color={"#535379"}>
                {/* {data.status} */}
                <Box
                  as="button"
                  bg={data.status === "Processed" ? "#5DC090" : "red.50"}
                  color={data.status === "Processed" ? "teal.100" : "red.50"}
                  rounded={"full"}
                  //   variant="outline"
                  p={2}
                >
                  <Flex alignItems="center">
                    <Text fontSize="sm" mr={2}>
                      &bull;
                    </Text>
                    {data.status === "Processed" ? "Processed" : "Failed"}
                  </Flex>
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box
        mt={4}
        display={{ md: "flex", base: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text>
            Showing {paginatedTransactions.length} of {mockData.length} results
          </Text>
        </Box>

        <HStack>
          <Button size={"sm"} variant="outline" onClick={goToPreviousPage}>
            <ChevronLeftIcon cursor="pointer" />
          </Button>

          <Button
            size="sm"
            bg={"white"}
            mr={2}
            cursor="pointer"
            color="blue.500"
            onClick={() => setCurrentPage(currentPage)}
          >
            {currentPage}
          </Button>

          <Button
            size="sm"
            bg={"white"}
            mr={2}
            cursor="pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </Button>

          <Button size={"sm"} variant="outline" onClick={goToNextPage}>
            <ArrowRightIcon cursor="pointer" />
          </Button>

          <Button
            size="sm"
            bg={"white"}
            mr={2}
            cursor="pointer"
            onClick={() => setCurrentPage(currentPage + 6)}
          >
            {currentPage + 6}
          </Button>

          <Button size={"sm"} variant="outline" onClick={goToNextPage}>
            <ChevronRightIcon cursor="pointer" />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default TransactionTable;
