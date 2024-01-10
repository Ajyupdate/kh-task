"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false, // Allow chart to adjust size
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Data",
      // data: labels.map(() => faker.number.int({ min: 25.0, max: 1000 })),
      data: [280, 420, 380, 280, 150, 190, 150, 190, 160, 190, 200, 220],
      borderColor: "rgb(237, 30, 121)",
      backgroundColor: "orange",
      barPercentage: 0.8, // Adjust as needed
    },
  ],
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

export default function HistogramChart() {
  return (
    <Box mt={12} width="100%" overflowX="auto">
      <Box
        bg={"white"}
        w={"100%"}
        p={{ md: 8, base: 2 }}
        border="1px"
        borderColor="rgb(231,231,231)"
        rounded={"md"}
        shadow={"sm"}
        maxH="400px" // Adjust the maximum height as needed
      >
        <Flex justify={"space-between"}>
          <HStack spacing={4}>
            <Heading fontSize={"14px"} fontWeight={700}>
              Revenue
            </Heading>

            <Text display={{ md: "block", base: "none" }}>
              <Text as={"span"} color="#6DC27F">
                +0.00%
              </Text>{" "}
              vs Last 7 days
            </Text>
          </HStack>

          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              borderWidth="1px"
              borderColor="gray.300"
              px="2"
              py="0"
              _hover={{ bg: "gray.100" }}
            >
              <Flex align="center" fontSize={"11px"} color={"gray"}>
                Weekly
                <Box as={IoIosArrowDown} ml="2" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <HStack spacing={4} display={{ md: "block", base: "none" }}>
          <Heading fontSize={"28.14px"} fontWeight={700}>
            ₦0.00
          </Heading>

          <Text fontSize={"13px"}>in total value</Text>
        </HStack>
        <Box></Box>
        <Bar options={options} data={data} />
      </Box>
    </Box>
  );
}
