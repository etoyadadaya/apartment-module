import axios from "axios";

const apiURL = "https://api.marquesdae.ru";
// const apiURL = "http://127.0.0.1:666";

const host = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-type": "application/json",
  },
});

const useApiCall = () => host;

export default useApiCall;
