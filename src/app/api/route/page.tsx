// import { mockData } from "../../path-to-your-mock-data-file"; // Update the path accordingly

import { NextApiRequest, NextApiResponse } from "next";

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
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log("read");
  try {
    res.status(200).json(mockData);
  } catch (error) {
    console.error("Error sending mock data:", error);
    res.status(500).json({ error: "Internallll Server Error" });
  }
}
