import client from "./client";

const endpoint = "/biblio/listlivre";

const getBooks = () => client.get(endpoint);

const addBook = (book) => {
  const data = new FormData();
  data.append("title", book.title);
  data.append("title", book.author);
  data.append("title", book.image);

  return client.post("/biblio/ajoutlivre", data);
};

export default {
  addBook,
  getBooks,
};
