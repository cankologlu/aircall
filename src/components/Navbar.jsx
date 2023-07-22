import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Navbar = () => {
  return (
<Tabs >
  <TabList display="flex" >
    <Tab _focus={{boxShadow:"none"}}>Calls</Tab>
    <Tab _focus={{boxShadow:"none"}}>Archive</Tab>
  </TabList>

  <TabPanels >
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>  )
}

export default Navbar;