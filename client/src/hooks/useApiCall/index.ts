import axios from "axios";

const apiURL = "https://api.marquesdae.ru";

const host = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-type": "application/json",
  },
});

const useApiCall = () => host;

export default useApiCall;
