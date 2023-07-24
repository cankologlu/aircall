import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import dateSorter from "../helpers/dateSorter";

const CallsContext = createContext({});

const CallsProvider = ({ children }) => {
  const [calls, setCalls] = useState({});

  // Function to make API call
  const callsApi = () => {
    axios
      .get("https://cerulean-marlin-wig.cyclic.app/activities")
      .then((response) => {
        const sortedData = dateSorter(response.data);
        setCalls(sortedData);
      })
      .catch((error) => {
        console.log("Error fetching Le Data", error);
      });
  };

  useEffect(() => {
    callsApi();
  }, []);

  const updateIsArchived = (callId, isArchived) => {
    console.log("Patch req callid", callId);
    const Id = callId;
    axios
      .patch(
        `https://cerulean-marlin-wig.cyclic.app/activities/${Id}`,
        {
          is_archived: isArchived,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Response data after patch req", response.data);
        callsApi();
      })
      .catch((error) => {
        console.log("Error updating is_archived", error);
      });
  };

  const archiveAll = () => {
    const archiveAllCalls = Object.entries(calls).map(([date, callList]) => {
      callList.map((call) => {
        if (call.from && !call.is_archived) {
          return updateIsArchived(call.id, true);
        }
      });
    });
    Promise.all(archiveAllCalls)
      .then((response) => {
        console.log("Archived all calls");
        callsApi();
      })
      .catch((error) => {
        console.log("Error archiving all calls", error);
      });
  };

  const unArchiveAll =() => {
    axios.patch("https://cerulean-marlin-wig.cyclic.app/reset")
    .then((response) => {
      // console.log("Api states reset",response);
      callsApi();
    }).catch((error) => {
      console.log("Reset Error", error)
    })
  }

  return (
    <CallsContext.Provider value={{ calls, updateIsArchived, archiveAll, unArchiveAll }}>
      {children}
    </CallsContext.Provider>
  );
};

export { CallsContext, CallsProvider };
