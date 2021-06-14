import client from "./client";

const register = (userInfo) => client.post("/user/signup", userInfo);

export default { register };
