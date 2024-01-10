// components/Table.tsx
"use client";
import { AccountData } from "@/app/api/data";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTransactions,
  setCurrentPage,
  setTransactions,
} from "../../../slices/transactionSlice";
export interface MockData {
  id: number;
  amount: string;
  transactionId: string;
  transactionType: string;
  date: string;
  time: string;
  status: string;
}

const PAGE_SIZE = 6;

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { data: transactions, currentPage } = useSelector(selectTransactions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setTransactions(AccountData));
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
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
      <Box display={{ md: "block", base: "none" }}>
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
                    width="100px"
                    overflow="hidden"
                    bg={data.status === "Processed" ? "teal.50" : "pink.50"}
                    color={
                      data.status === "Processed" ? "green.700" : "red.700"
                    }
                    rounded="full"
                    py={2}
                    px={2}
                    border="1px" // Set the border width
                    borderColor={
                      data.status === "Processed" ? "teal.100" : "red.100"
                    }
                  >
                    <Flex justify={"center"}>
                      <Text fontSize="x-large" mr={1}>
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
      </Box>

      <Box display={{ md: "none", base: "block" }}>
        <Heading mt={8}>Transactions</Heading>

        <Box>
          {paginatedTransactions.map((data) => (
            <Card key={data.id} variant={"outline"} my={2} p={4}>
              <Stack>
                <Flex justify={"space-between"}>
                  <Text>Amount</Text>
                  <Text>{data.amount}</Text>
                </Flex>
                <Divider />
                <Flex justify={"space-between"}>
                  <Text>Transaction Type</Text>
                  <Text>{data.transactionType}</Text>
                </Flex>
                <Divider />
                <Flex justify={"space-between"}>
                  <Text>Date</Text>
                  <Text>{data.date}</Text>
                </Flex>
                <Divider />
                <Flex justify={"space-between"}>
                  <Text>Status</Text>
                  <Box
                    as="button"
                    width="100px"
                    overflow="hidden"
                    bg={data.status === "Processed" ? "teal.50" : "pink.50"}
                    color={
                      data.status === "Processed" ? "green.700" : "red.700"
                    }
                    rounded="full"
                    // py={2}
                    px={2}
                    border="1px" // Set the border width
                    borderColor={
                      data.status === "Processed" ? "teal.100" : "red.100"
                    }
                  >
                    <Flex justify={"center"}>
                      <Text fontSize="x-large">&bull;</Text>
                      <Text mt={2}>
                        {data.status === "Processed" ? "Processed" : "Failed"}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>
      <Box
        mt={4}
        display={{ md: "flex", base: "none" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text>
            Showing {paginatedTransactions.length} of {AccountData.length}{" "}
            results
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
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
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
            onClick={() => dispatch(setCurrentPage(currentPage + 6))}
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
