import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = `${token}`;
  } else {
    axios.defaults.headers.common["authorization"] = "";
  }
};
export default setAuthToken;