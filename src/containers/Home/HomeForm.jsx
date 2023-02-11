import React, { useState } from "react";
import requests from "../../services/requests";
import { useBannerMovieData, useMovieData } from "../../hooks/useMovie";
import Spinner from "../../components/Spinner";
import Banner from "../../components/Banner";
import Video from "../../components/Video";
import Modal from "../../components/Modal/movieModal";
import { BannerContainer } from "../../components/Row/styles";
import Empty from "../../components/Empty";
import RowContainer from "../Row/RowContainer";

export default function HomeForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const {
    data: movieData,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie,
  } = useMovieData(0, requests.fetchNowPlaying);

  const {
    data: bannerMovie,
    isLoading: isLoadingDetail,
    isError: isErrorBannerMovie,
    error: errorDetail,
  } = useBannerMovieData(movieData);

  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  if (isLoadingMovie || isLoadingDetail) return <Spinner />;
  if (isErrorMovie) return <Empty>{errorMovie.message}</Empty>;
  if (isErrorBannerMovie) return <Empty>{errorDetail.message}</Empty>;

  return (
    <BannerContainer>
      {isClicked === false ? (
        <>
          <Banner
            movie={bannerMovie}
            movieClick={movieClick}
            setIsClicked={setIsClicked}
          />
          <RowContainer
            id="1"
            title="Top 20 순위"
            fetchUrl={requests.fetchTopRated}
            movieClick={movieClick}
            isLankRow
          />
          <RowContainer
            id="2"
            title="오직 넷플릭스에서만"
            fetchUrl={requests.fetchNetflixOriginals}
            movieClick={movieClick}
          />
          {/* <Row
            id="3"
            title="지금 뜨는 콘텐츠"
            fetchUrl={requests.fetchTrending}
            movieClick={movieClick}
          /> */}
          {modalOpen && (
            <Modal
              {...movieSelected}
              setModalOpen={setModalOpen}
              setIsClicked={setIsClicked}
            />
          )}
        </>
      ) : (
        <>
          {bannerMovie.videos.results[0] ? (
            <Video movie={bannerMovie} />
          ) : (
            <Empty>
              <p>영상이 없습니다.</p>
            </Empty>
          )}
        </>
      )}
    </BannerContainer>
  );
}
