import { useQuery } from "@tanstack/react-query";
import {
  MovieSelectData,
  MovieData,
  MovieSearchData,
} from "../services/axios";

export const useMovieData = (id, fetchUrl) => {
  return useQuery(["movieData", id], () => MovieData(fetchUrl));
};

export const useSearchData = searchKey => {
  return useQuery(["searchData"], () => MovieSearchData(searchKey));
};

export const useBannerMovieData = movieData => {
  return useQuery(["MovieDataDetail"], () => MovieSelectData(movieData), {
    enabled: !!movieData,
    retry: 0,
  });
};