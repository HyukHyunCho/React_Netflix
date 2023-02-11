import axios from "axios";

const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token_")}`,
    "Content-type": "application/json",
  },
});

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    language: "ko-KR",
  },
});

export const userLogin = async userInfo => {
  const { data } = await baseInstance.post("/user/login", userInfo);
  return data;
};

export const userSignup = async userInfo => {
  const { data } = await baseInstance.post("/user", userInfo);
  return data;
};

export const imageUpload = async formImg => {
  const {
    data: { filename },
  } = await baseInstance.post("/image/uploadfile", formImg);
  return filename;
};

export const userUpdate = async userInfo => {
  const { data } = await authInstance.put("/user", userInfo);
  return data;
}

export const getUserInfo = async accountname => {
  const { data } = await authInstance.get(`/profile/${accountname}`);
  return data;
};


export const MovieData = async fetchUrl => {
  const {
    data: { results },
  } = await instance.get(fetchUrl);
  return results;
};

export const MovieSearchData = async search => {
  const {
    data: { results },
  } = await instance.get(`/search/multi?include_adult=false&query=${search}`);
  return results;
};

export const MovieSelectData = async movieData => {
  const movieId = movieData[Math.floor(Math.random() * movieData.length)].id;
  const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
    params: { append_to_response: "videos" },
  });
  return movieDetail;
};