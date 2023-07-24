import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Icon,
  Text,
  Badge,
  SimpleGrid,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { BiPhoneIncoming, BiPhoneOutgoing, BiArchiveIn } from "react-icons/bi";

import dateFormatter from "../helpers/dateFormatter.js";
import timeFormatter from "../helpers/timeFormatter.js";
import { CallsContext } from "../context/CallsProvider.jsx";



const ActivityList = () => {
  const { calls, updateIsArchived } = useContext(CallsContext);
  console.log("Calls from context are:",calls)
  return (
    <Box
      overflowY="auto"
      maxHeight="450px"
      overflowX="hidden"
      paddingY="10px"
      paddingX="8px"
      w={"inherit"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#CBD5E0",
          borderRadius: "24px",
        },
      }}
    >
      {Object.entries(calls).reverse().map(
        ([date, callList]) =>
          callList.some((call) => !call.is_archived) && (
            <Box key={date}>
              <Text my={"5px"} >
                {dateFormatter(date)}
              </Text>
              <Divider my={"10px"} mx={"10px"} />
              {callList.map(
                (call) =>
                  !call.is_archived && (
                    <Box
                      key={call.id}
                      boxShadow="lg"
                      p="6"
                      rounded="md"
                      bg="white"
                      mt={"10px"}
                      paddingY={"10px"}
                    >
                      <SimpleGrid templateColumns={"repeat(5,1fr)"}>
                        <Icon
                          as={
                            call.direction === "inbound"
                              ? BiPhoneIncoming
                              : BiPhoneOutgoing
                          }
                          boxSize={"25px"}
                          color={call.duration > 0 ? "green.500" : "red.500"}
                          width={"min-content"}
                        />

                        <Text
                          width={"max-content"}
                          colSpan={1}
                          alignSelf={"center"}
                          justifySelf={"center"}
                        >
                          {call.from === undefined ? "Unknown" : "" + call.from}
                        </Text>
                        <Badge
                          colorScheme="red"
                          height={"min-content"}
                          width={"min-content"}
                          alignSelf={"center"}
                          justifySelf={"center"}
                        >
                          1
                        </Badge>

                        <IconButton
                          colSpan={1}
                          bg={"white"}
                          width={"2px"}
                          onClick={() => {console.log("calls from onclick", calls); console.log("call from onclick", call);updateIsArchived(call.id, true)}}
                          icon={<BiArchiveIn />}
                          isDisabled={!call.from}
                        />
                        <Text
                          colSpan={1}
                          display={"flex"}
                          alignSelf={"center"}
                          justifySelf={"center"}
                        >
                          {timeFormatter(call.created_at)}
                        </Text>
                      </SimpleGrid>
                      <Divider />
                      <Text mt={"2px"}>
                        Called on: {call.via ? "aircall" : "phone"}
                      </Text>
                    </Box>
                  )
              )}
            </Box>
          )
      )}
    </Box>
  );
};

export default ActivityList;
