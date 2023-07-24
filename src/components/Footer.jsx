import React from "react";
import { Box, Icon, Grid, GridItem } from "@chakra-ui/react";
import { BiSolidStar, BiMenu, BiSolidUser } from "react-icons/bi";

const Footer = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Box p={2}>
          <Icon as={BiSolidStar} boxSize={"40px"} color={"blackAlpha.400"} _hover={{color:"blackAlpha.600"}} />
        </Box>
      </GridItem>
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Box p={2}>
          <Icon as={BiMenu} boxSize={"40px"} color={"blackAlpha.400"} _hover={{color:"blackAlpha.700" }} />
        </Box>
      </GridItem>
      <GridItem display="flex" alignItems="center" justifyContent="center">
        <Box p={2}>
          <Icon as={BiSolidUser} boxSize={"40px"} color={"blackAlpha.400"} _hover={{color:"blackAlpha.600" }}/>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Footer;