import { useQuery } from "@tanstack/react-query"
import { MovieBannerData, MovieData } from "../services/axios";

export const useBannerMovieData = movieData => {
  return useQuery(["MovieDataDetail"], () => MovieBannerData(movieData), {
    enabled: !!movieData,
    retry: 0,
  });
};

export const useMovieData = (id, fetchUrl) => {
  return useQuery(["movieData", id], () => MovieData(fetchUrl), {
    retry: 0,
  });
};


