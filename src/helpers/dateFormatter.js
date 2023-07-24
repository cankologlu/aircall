
// Format date as desired
const dateFormatter = (date) => {
  return new Date(date).toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})
}

export default dateFormatter;