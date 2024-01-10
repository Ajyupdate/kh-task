import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import copyIcon from "../../../../public/copy.svg";

export interface iAccountDetailsCardProps {
  accountDetails: AccountDetailsprops[];
}
export interface AccountDetailsprops {
  id: string;
  bankName: string;
  amount: string;
}
export default function AccountDetailsCard({
  accountDetails,
}: iAccountDetailsCardProps) {
  const [numberToCopy, setNumberToCopy] = useState("123456"); // Replace with your desired number
  const { hasCopied, onCopy } = useClipboard(numberToCopy);
  useEffect(() => {
    if (accountDetails.length > 0) {
      setNumberToCopy(accountDetails[0].amount);
    }
  }, [accountDetails]);
  return (
    <Box>
      <Grid
        templateColumns={{ base: "100%", md: "33% 33% 33% " }}
        mt={"4"}
        gap={"4"}
        flexWrap={"nowrap"}
        alignItems={"center"}
      >
        {accountDetails.map((account) => (
          <Card
            key={account.id}
            p={"4"}
            // boxShadow={"sm"}
            variant={"outline"}
            color={"black"}
          >
            <Stack spacing={2}>
              <Text color={"#8F8E8E"} letterSpacing={"1%"} fontSize={"12px"}>
                ACCOUNT DETAILS
              </Text>
              <Heading
                letterSpacing={"1%"}
                fontWeight={500}
                color={"#000000"}
                fontSize={"11px"}
              >
                {account.bankName}
              </Heading>
              <Flex justify={"space-between"}>
                <Heading
                  fontWeight={700}
                  letterSpacing={"1%"}
                  color={"#000000"}
                  fontSize={"21px"}
                >
                  {account.amount}
                </Heading>

                <Box
                  cursor={"pointer"}
                  bg={"purple.100"}
                  color={"#9F56D4"}
                  fontWeight={200}
                  className={`rounded-md px-1 bg-red-500 text-Box-red`}
                  onClick={onCopy}
                  // type="button"
                >
                  <Flex m={1}>
                    <Text ml={1} fontWeight={"extrabold"}>
                      <Image src={copyIcon} alt={"copy"} />
                    </Text>

                    <Text px={2} fontWeight={400} fontSize={12}>
                      {hasCopied ? "Copied!" : "Copy"}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Heading
                letterSpacing={"1%"}
                fontWeight={500}
                color={"#000000"}
                fontSize={"11px"}
              >
                OGEDENGBE FRUITS STORE
              </Heading>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
