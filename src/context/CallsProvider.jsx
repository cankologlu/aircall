import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


const CallsContext = createContext({});

const CallsProvider = ({children }) => {
  const [calls, setCalls] = useState({});

  // Function to make API call
  const callsApi = () => {
    axios
      .get(
        "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
      )
      .then((response) => {
        setCalls(response.data);
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
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities${callId}`,
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