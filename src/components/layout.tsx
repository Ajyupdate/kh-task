import store from "@/store";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { Provider } from "react-redux";
import account from "../../public/accounts.svg";
import bell from "../../public/bell.svg";
import logo from "../../public/logo.svg";
import setting from "../../public/setting.svg";
import transactions from "../../public/transactions.svg";
import transferIcon from "../../public/transfers.svg";
import www from "../../public/www.svg";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  console.log(isLargerThan800);
  console.log(pathName);
  return (
    <Provider store={store}>
      <Box>
        {!isLargerThan800 && pathName === "/transactions" ? (
          <Box mb={8} mt={8}>
            <HStack p={4}>
              <Text>
                <ArrowBackIcon />
              </Text>

              <Heading>Transaction</Heading>
            </HStack>
            <Divider />
          </Box>
        ) : (
          <nav className=" bg-gray-50 fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3 bg-white md:bg-gray-50">
              <div className="flex items-center justify-between bg-white md:bg-gray-50">
                <div className="flex items-center justify-start rtl:justify-end bg-white md:bg-gray-50">
                  <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:-700 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      ></path>
                    </svg>
                  </button>
                  <a href="" className="flex ms-2 md:me-24">
                    <Image src={logo} className="h-8 me-3" alt="logo" />
                  </a>
                </div>
                <div className="flex items-center bg-white md:bg-gray-50">
                  <div className="mr-3">
                    <Image src={bell} alt="notifications" />
                  </div>
                  <div className="flex items-center ms-3">
                    <div>
                      <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <span className="sr-only">Open user menu</span>

                        <Avatar
                          bg="teal.400"
                          size={"sm"}
                          name="Godswill Akpabio"
                        />
                      </button>
                    </div>
                    <div
                      className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="dropdown-user"
                    >
                      <div className="px-4 py-3" role="none">
                        <p
                          className="text-sm text-gray-900 dark:text-white"
                          role="none"
                        >
                          Neil Sims
                        </p>
                        <p
                          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                          role="none"
                        >
                          neil.sims@flowbite.com
                        </p>
                      </div>
                      <ul className="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
        <aside
          id="logo-sidebar"
          className=" fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full  pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li className="rounded-none">
                <a
                  href="#"
                  className="flex items-center p-6 text-gray-900 rounded-none  dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group"
                >
                  <Image src={www} alt="Getting started" />

                  <span className="ms-3">Get Started</span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className={`${
                    pathName === "/" ? "bg-blue-700 text-white" : ""
                  } flex items-center p-4 text-gray-900 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group`}
                >
                  <Box>
                    <MdSpaceDashboard size={24} />
                  </Box>

                  {/* <Image src={dashboardIcon} alt="dashboard" /> */}
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group"
                >
                  <Image src={account} alt="account icon" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Accounts
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group"
                >
                  <Image src={transferIcon} alt="transfers" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Transfers
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/transactions"
                  className={`${
                    pathName === "/transactions" ? "bg-blue-700 text-white" : ""
                  } flex items-center p-4 text-gray-900 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group`}
                >
                  <Box color={"white"}>
                    <Image src={transactions} alt="transaction" />
                  </Box>

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Transactions
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group"
                >
                  <Image src={setting} alt="Setting icon" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div
          className={`p-4 sm:ml-64 ${
            !isLargerThan800 ? "bg-white" : "bg-gray-50"
          }`}
        >
          {children}
        </div>
      </Box>
    </Provider>
  );
}
