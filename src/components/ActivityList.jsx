import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Icon,
  Text,
  Badge,
  SimpleGrid,
  IconButton,
  Divider,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { FaEllipsisV} from "react-icons/fa";
import { BiPhoneIncoming, BiPhoneOutgoing, BiArchiveIn , BiArchive  } from "react-icons/bi";


import dateFormatter from "../helpers/dateFormatter.js";
import timeFormatter from "../helpers/timeFormatter.js";
import { CallsContext } from "../context/CallsProvider.jsx";



const ActivityList = () => {
  const { calls, updateIsArchived, archiveAll } = useContext(CallsContext);
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Handle both actions at the same time
  const handleConfirm = () => {
    archiveAll(); 
    onClose(); 
  }


  return (
    <Box
    overflowY="auto"
    height="450px"
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
      <Container as={Button} 
          _focus={{
            boxShadow: "none"
          }} onClick={onOpen}>
        <Text>Archive All</Text>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xs"} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Archive all calls?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter display={"flex"}>
            <Button alignSelf={"center"} colorScheme='red' mr={3} onClick={handleConfirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Container>
      {Object.entries(calls).reverse().map(
        ([date, callList]) =>
          callList.reverse().some((call) => !call.is_archived) && (
            <Box key={date}>
              <Text my={"5px"} color={"blackAlpha.600"} fontSize={"xs"} >
                {dateFormatter(date)}
              </Text>
              <Divider my={"10px"}  />
              {callList.map(
                (call) =>
                  !call.is_archived && (
                    <Box
                      key={call.id}
                      boxShadow="md"
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
                          width={"55px"}
                          colSpan={1}
                          alignSelf={"center"}
                          justifySelf={"center"}
                        >
                          {call.from === undefined ? "Unknown" : "" + call.from}
                        </Text>
                        <Badge
                          colorScheme="orange"
                          height={"min-content"}
                          width={"min-content"}
                          alignSelf={"center"}
                          justifySelf={"center"}
                          borderRadius={"20px"}
                        >
                          1
                        </Badge>

                        <IconButton
                          colSpan={1}
                          bg={"white"}
                          boxSize={"40px"}
                          onClick={() => {console.log("calls from onclick", calls); console.log("call from onclick", call);updateIsArchived(call.id, true)}}
                          icon={<BiArchiveIn />}
                          isDisabled={!call.from}
                          
                        />
                        <Text
                          colSpan={1}
                          display={"flex"}
                          alignSelf={"center"}
                          justifySelf={"center"}
                          fontSize={"xs"} color={"gray"}
                        >
                          {timeFormatter(call.created_at)}
                        </Text>
                      </SimpleGrid>
                      <Divider />
                      <Text mt={"2px"} fontSize={"xs"} color={"gray"}>
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
