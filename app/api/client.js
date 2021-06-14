import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.100.154:9000/",
});

export default apiClient;
