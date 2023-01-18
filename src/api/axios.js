import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "227d7e61d12a657bf0275f7ab2fc0d92",
    language: "ko-KR",
  },
});

export const MovieData = async fetchUrl => {
  const {
    data: { results },
  } = await instance.get(fetchUrl);
  return results;
};

export const MovieDetailData = async movieNowData => {
  const movieId = movieNowData[Math.floor(Math.random() * movieNowData.length)].id;
  
  const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
    params: { append_to_response: "videos" },
  });
  console.log(movieDetail);
  return movieDetail;
};
 


