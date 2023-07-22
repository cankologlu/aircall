import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

import ActivityList from "./ActivityList";

const Navbar = () => {
  return (
    <Tabs>
      <TabList display="flex">
        <Tab
          _selected={{ boxShadow: "inner",
          py: "inherit",
          rounded: "sm",
          bg: "white", color: "green" }}
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
          _selected={{ boxShadow: "inner",
          py: "inherit",
          rounded: "sm",
          bg: "white", color: "green" }}
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
      
      <TabPanels>
        <TabPanel>
        <Button 
        height={5}
        colorScheme=""
        variant="outline"
        w="100%"
        borderTop="none"
        borderRadius="0"
        borderLeft={"none"}
        borderRight={"none"}

        _focus={{
          boxShadow: "inner",
          py: "inherit",
          rounded: "sm",
          bg: "white",
          borderTop: "none",
          borderTopRadius: "0",
          height:"3"
        }}
        _selected={{
          boxShadow: "inner",
          py: "inherit",
          rounded: "sm",
          bg: "white",
          borderTop: "none",
          borderTopRadius: "0",
          height:"3",
        }}
      >
        Archive all calls
      </Button>
          <ActivityList />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    
  );
};

export default Navbar;
