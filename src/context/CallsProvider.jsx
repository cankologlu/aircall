import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import dateSorter from "../helpers/dateSorter";


const CallsContext = createContext({});

const CallsProvider = ({children }) => {
  const [calls, setCalls] = useState({});

  // Function to make API call
  const callsApi = () => {
    axios
      .get(
        "https://cerulean-marlin-wig.cyclic.app/activities"
      )
      .then((response) => {
        const sortedData = dateSorter(response.data)
        setCalls(sortedData);
        console.log(response.data)
        console.log(calls)
      })
      .catch((error) => {
        console.log("Error fetching Le Data", error);
      });
  };

  useEffect(() => {
    callsApi();
  }, []);

  const updateIsArchived = (callId, isArchived) => {
    axios
      .patch(
        `https://cerulean-marlin-wig.cyclic.app/activities${callId}`,
        {
          is_archived: isArchived,
        }
      )
      .then((response) => {
        callsApi();
      })
      .catch((error) => {
        console.log("Error updating is_archived", error);
      });
  };
  return (
    <CallsContext.Provider value={{ calls, updateIsArchived }}>
      {children}
    </CallsContext.Provider>
  )
};

export { CallsContext, CallsProvider}