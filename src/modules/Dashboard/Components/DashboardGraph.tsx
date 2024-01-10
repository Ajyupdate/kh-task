import { Box, Card, Flex, HStack, Select, Text } from "@chakra-ui/react";
import HistogramChart from "./HistogramChart";

export default function DashboardGraph() {
  return (
    <Box
      mt={8}
      p={4}
      border="1px"
      borderColor="rgb(231,231,231)"
      rounded={"md"}
      shadow={"sm"}
    >
      <Flex justify={"space-between"} display={{ md: "flex", base: "none" }}>
        <HStack>
          <Text fontSize={"14px"} fontWeight={600} color={"#71717A"}>
            Showing data for
          </Text>

          <Card>
            <Select>
              <option value="option1">Last 7 days</option>
              <option value="option2">Last 14 days</option>
            </Select>
          </Card>
        </HStack>

        <HStack spacing={4}>
          <Text>Today</Text>
          <Text py={4} px={4} bg={"blue.50"}>
            Last 7 days
          </Text>
          <Text>Last 30 days</Text>
        </HStack>
      </Flex>

      <HistogramChart />
    </Box>
  );
}
