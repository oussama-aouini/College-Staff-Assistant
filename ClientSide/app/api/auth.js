import client from "./client";

const login = (email, password) =>
  client.post("/user/signin", { email, password });

export default {
  login,
};
