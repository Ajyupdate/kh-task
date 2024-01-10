import Layout from "@/components/layout";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AccountDetailsCard from "../Components/AccountDetailsCard";
import DashboardGraph from "../Components/DashboardGraph";

const accounts = [
  {
    id: "1",
    bankName: "STERLING BANK",
    amount: "8000000000",
  },
];
export default function Dashboard() {
  return (
    <Box>
      <Layout>
        <Box>
          <Tabs>
            <TabList>
              <Tab>Online Payment</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                  <AccountDetailsCard accountDetails={accounts} />
                  <DashboardGraph />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Layout>
    </Box>
  );
}
