import axios from "axios";

const blogFetch = axios.create({
  baseURL: "https://rian.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
