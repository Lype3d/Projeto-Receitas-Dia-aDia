import axios from "axios";

const blogFetch = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:3000",
=======
  baseURL: "https://rian.onrender.com",
>>>>>>> a905a44cceb00dfe5dce5795a23cc0cda8c1873f
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;
