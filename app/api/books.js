import client from "./client";

const endpoint = "/books";

const getBooks = () => client.get(endpoint);

export default {
  getBooks,
};
