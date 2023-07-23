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
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi";

import { CallsContext } from "../context/CallsProvider.jsx";

const mockData = [
  {
    direction: "outbound",
    from: 100000,
    to: 200000,
    via: 30000000,
    duration: 0,
    call_type: "missed",
    is_archived: false,
    id: "6393bb5469073dc45849ca7a",
    created_at: "2022-12-09T22:48:52.789Z",
  },
  {
    direction: "inbound",
    from: 100001,
    to: 200002,
    via: 30000003,
    duration: 10,
    call_type: "answered",
    is_archived: false,
    id: "6393bb7b69073dc45849ca7c",
    created_at: "2022-12-09T22:49:31.911Z",
  },
  {
    direction: "inbound",
    from: 100001,
    to: 200001,
    via: 30000001,
    duration: 0,
    call_type: "missed",
    is_archived: false,
    id: "639737ac587edc08100c026f",
    created_at: "2022-12-12T14:16:12.721Z",
  },
  {
    direction: "inbound",
    from: 100002,
    to: 200002,
    via: 30000002,
    duration: 20,
    call_type: "voicemail",
    is_archived: true,
    id: "63973961362d5c09cd79364a",
    created_at: "2022-12-12T14:23:29.409Z",
  },
];

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
      {Object.entries(calls).map(
        ([date, callList]) =>
          callList.some((call) => !call.is_archived) && (
            <Box key={date}>
              <Text my={"10px"} alignContent={"center"}>
                {date}
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
                          3
                        </Badge>

                        <IconButton
                          colSpan={1}
                          bg={"white"}
                          width={"2px"}
                          onClick={() => {console.log("calls from onclick", calls); console.log("call from onclick", call);updateIsArchived(call.id, true)}}
                          icon={<FaEllipsisV />}
                        />
                        <Text
                          colSpan={1}
                          display={"flex"}
                          alignSelf={"center"}
                          justifySelf={"center"}
                        >
                          {new Date(call.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
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
