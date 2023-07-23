import React from "react";

import ActivityList from "./ActivityList.jsx";
import ArchiveList from "./ArchiveList.jsx";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Tabs>
      <TabList display="flex">
        <Tab
          _selected={{
            boxShadow: "inner",
            py: "inherit",
            rounded: "sm",
            bg: "white",
            color: "green",
          }}
          _focus={{
            boxShadow: "inner",
            py: "inherit",
            rounded: "sm",
            bg: "white",
          }}
        >
          Calls
        </Tab>
        <Tab
          _selected={{
            boxShadow: "inner",
            py: "inherit",
            rounded: "sm",
            bg: "white",
            color: "green",
          }}
          _focus={{
            boxShadow: "inner",
            py: "inherit",
            rounded: "sm",
            bg: "white",
          }}
        >
          Archive
        </Tab>
      </TabList>

      <TabPanels display={"inherit"}>
        <TabPanel >
          <ActivityList />
        </TabPanel>
        <TabPanel>
          <ArchiveList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Navbar;
