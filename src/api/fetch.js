import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
      api_key: "227d7e61d12a657bf0275f7ab2fc0d92",
      language: "ko-KR",
  },
});


export default instance;