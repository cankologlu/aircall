
// Sorts incoming data according to dates

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

export default dateSorter;