import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://receitas-back.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
