import Layout from "@/components/layout";
import {
  Box,
  Card,
  Divider,
  Flex,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import calenderIcon from "../../../../public/calendar.svg";
import exportIcon from "../../../../public/export.svg";
import TransactionTable from "../components/TransactionTable";
export default function Transactions() {
  return (
    <Box>
      <Layout>
        <Box mt={24}>
          <Flex justify={"space-between"}>
            <Box>
              <Select placeholder="All Account">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box>
              <HStack>
                <Text
                  color={"#71717A"}
                  fontSize={"14px"}
                  display={{ md: "block", base: "none" }}
                >
                  Select Date Range:
                </Text>

                <Card
                  variant={"outline"}
                  p={1}
                  display={{ md: "block", base: "none" }}
                >
                  <Flex rounded={"full"} align="center" bg={"white"}>
                    <Box mr={2}>
                      <Image src={calenderIcon} alt="calender" />
                    </Box>

                    <Text fontSize={"14px"} color={"#71717A"}>
                      June 6, 2023 - Jun 15, 2023
                    </Text>
                  </Flex>
                </Card>
                <Card variant={"outline"} p={1}>
                  <Flex rounded={"full"} align="center" bg={"white"}>
                    <Box mr={2}>
                      <Image src={exportIcon} alt="calender" />
                    </Box>

                    <Text fontSize={"14px"} color={"#71717A"}>
                      Export
                    </Text>
                  </Flex>
                </Card>
              </HStack>
            </Box>
          </Flex>
          <Box display={{ md: "none", base: "block" }} mt={4}>
            <HStack>
              <Text color={"#71717A"} fontSize={"14px"}>
                Select Date Range:
              </Text>

              <Card variant={"outline"} p={1}>
                <Flex rounded={"full"} align="center" bg={"white"}>
                  <Box mr={2}>
                    <Image src={calenderIcon} alt="calender" />
                  </Box>

                  <Text fontSize={"14px"} color={"#71717A"}>
                    June 6, 2023 - Jun 15, 2023
                  </Text>
                </Flex>
              </Card>
            </HStack>
          </Box>
        </Box>
        <Box mt={4}>
          <Divider />
        </Box>
        <TransactionTable />
      </Layout>
    </Box>
  );
}
