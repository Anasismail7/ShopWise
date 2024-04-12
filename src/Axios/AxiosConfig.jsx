import axios from "axios";

const BASE_URL = "https://json-data-d14u.onrender.com";
const AxiosConfig = axios.create({
  baseURL: BASE_URL,
});

AxiosConfig.defaults.headers.common["Content-Type"] = "application/json";
AxiosConfig.defaults.headers.common.Accept = "application/json";

export default AxiosConfig;
