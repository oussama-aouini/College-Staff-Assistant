import client from "./client";

const endpoint = "/biblio/listlivre";

const getBooks = () => client.get(endpoint);

const addBook = (book) => {
  const data = new FormData();
  data.append("id", book.id);
  data.append("title", book.title);
  data.append("author", book.author);
  data.append("image", book.image);

  return client.post("/biblio/ajoutlivre", data);
};

export default {
  addBook,
  getBooks,
};
