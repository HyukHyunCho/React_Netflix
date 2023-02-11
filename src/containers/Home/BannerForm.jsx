import React, { useState } from 'react'
import Banner from '../../components/Banner';
import Empty from '../../components/Empty';
import Spinner from '../../components/Spinner';
import { useBannerMovieData, useMovieData } from "../../hooks/useMovie";
import reauests from "../../services/requests";

export default function BannerForm({ movieClick }) {
  const [isClicked, setIsClicked] = useState(false);
  const {
    data: movieData,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie,
  } = useMovieData(0, reauests.fetchNowPlaying);

  const {
    data: detailMovie,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
    error: errorDetail,
  } = useBannerMovieData(movieData);

  if (isLoadingMovie || isLoadingDetail) return <Spinner />;
  if (isErrorMovie) return <Empty>{errorMovie.message}</Empty>;
  if (isErrorDetail) return <Empty>{errorDetail.message}</Empty>;

  return (
    <Banner
      movie={detailMovie}
      movieClick={movieClick}
      setIsClicked={setIsClicked}
    />
  );
}
