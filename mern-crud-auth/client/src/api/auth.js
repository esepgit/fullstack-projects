import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const registerRequest = (user) =>
  axios.post(`${baseUrl}/register`, user);

export const loginRequest = (user) => axios.post(`${baseUrl}/login`, user);
