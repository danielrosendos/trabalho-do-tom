import axios from "axios";

const service = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", //Mude para a url do seu backend
});

export default service;
