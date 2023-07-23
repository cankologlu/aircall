import React, { useState, useEffect } from "react";
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

const dateSorter = (data) => {
  return data.reduce((dateOfCall, call) => {
    const callDate = call.created_at.split("T")[0];
    if (dateOfCall[callDate]) {
      dateOfCall[callDate].push(call);
    } else {
      dateOfCall[callDate] = [call];
    }
    return dateOfCall;
  }, {});
};

const ArchiveList = () => {
  const [calls, setCalls] = useState({});
  useEffect(() => {
    const sortedData = dateSorter(mockData);
    setCalls(sortedData);
  }, []);


  console.log(calls);
  return (
    <Box>
      {Object.entries(calls).map(([date, callList]) => (callList.some((call) => call.is_archived) &&
        <Box key={date}>
          <Text my={"10px"} alignContent={"center"} >{date}</Text>
          <Divider my={"10px"} mx={"10px"}/>
          {callList.map((call) => call.is_archived &&
          <Box key={call.id}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            mt={"10px"}
            paddingY={"10px"}
          >
            <SimpleGrid templateColumns={"repeat(5,1fr)"}>
              <Icon key ={"icon" + call.id}
                as={call.direction === "inbound"? BiPhoneIncoming : BiPhoneOutgoing}
                boxSize={"25px"}
                color={call.duration > 0 ? "green.500" : "red.500"}
                width={"min-content"}
              />

              <Text key={"from" + call.id}
                width={"max-content"}
                colSpan={1}
                alignSelf={"center"}
                justifySelf={"center"}
              >
                {"" + call.from}
              </Text>
              <Badge key ={"badge" + call.id }
                colorScheme="red"
                height={"min-content"}
                width={"min-content"}
                alignSelf={"center"}
                justifySelf={"center"}
              >
                3
              </Badge>

              <IconButton key={"icon-button" + call.id}
                colSpan={1}
                bg={"white"}
                width={"2px"}
                onClick={() => console.log("hey")}
                icon={<FaEllipsisV />}
              />
              <Text key = {"time" + call.id}
                colSpan={1}
                display={"flex"}
                alignSelf={"center"}
                justifySelf={"center"}
              >
                {/* {call.created_at.split("T")[1].split(":")[0] + ":" + call.created_at.split("T")[1].split(":")[1]} */}
              </Text>
            </SimpleGrid>
            <Divider />
            <Text mt={"2px"}>Called on: {call.via ? "aircall" : "phone"}</Text>
          </Box>
          )}
        </Box>
      ))}
  </Box>);
};

export default ArchiveList;
