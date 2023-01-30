import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "227d7e61d12a657bf0275f7ab2fc0d92",
    language: "ko-KR",
  },
});

export const userLogin = async userInfo => {
  const { data } = await axios.post("/user/login", userInfo);
  return data;
};

export const userSignup = async userInfo => {
  const { data } = await axios.post("/user", userInfo);
  return data;
}

export const MovieBannerData = async movieData => {
  const movieId = movieData[Math.floor(Math.random() * movieData.length)].id;
  const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
    params: { append_to_response: "videos" },
  });
  return movieDetail;
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
}


