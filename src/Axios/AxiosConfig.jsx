import axios from "axios";

const BASE_URL = "http://localhost:3004/products";
const AxiosConfig = axios.create({
  baseURL: BASE_URL,
});

AxiosConfig.defaults.headers.common["Content-Type"] = "application/json";
AxiosConfig.defaults.headers.common.Accept = "application/json";

export default AxiosConfig;
