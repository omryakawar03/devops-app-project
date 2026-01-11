import axios from "axios";

export const api = axios.create({
  baseURL: "http://<EC2_PUBLIC_IP>:3001/api",
});
