import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-7c7ea.firebaseio.com/"
});

export default instance;
