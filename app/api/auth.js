import client from "./client";

const login = (email, password) => client.post("/signin", { email, password });

export default {
  login,
};
