import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import bell from "../../public/bell.svg";
import logo from "../../public/logo.svg";

export default function Navbar() {
  return (
    <Box mt={12} mb={24} borderBottom={"1px solid #ccc"}>
      <Flex justify={"space-between"} mb={12} mx={32}>
        <HStack spacing={32}>
          <Image src={logo} alt="Logo" />
        </HStack>

        <Box>
          <HStack spacing={6} alignItems={"center"}>
            <Box mr={16}>
              <Image src={bell} alt="Logo" />
            </Box>
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  display="flex"
                  alignItems="center"
                  className="bg-teal-500 text-white p-2 rounded-full"
                >
                  GT
                  {/* <Avatar name="God's Time" bg="red.500" /> */}
                  {/* <div className="flex items-center space-x-4"> */}
                  {/* <button className="bg-blue-500 p-1 rounded-full">GA</button> */}
                  {/* </div> */}
                </MenuButton>
                <MenuList display={{ base: "block", md: "none" }}>
                  <MenuItem>Homepage</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuDivider />
                  <MenuItem>About Evvent</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
