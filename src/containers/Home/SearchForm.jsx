import React, { useEffect, useState } from "react";
import { useSearchData } from "../../hooks/useMovie";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Empty from "../../components/Empty";
import RowSearch from "../../components/Row/RowSearch";
import { SearchContainer, RowContainer, Title } from "../../components/Row/styles";
import useDebounce from "../../hooks/useDebounce";
import Modal from "../../components/Modal/movieModal";

export default function SearchForm() {
  const navigate = useNavigate();
  const useParam = () => {
    return new URLSearchParams(useLocation().search);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  let query = useParam();
  const searchKey = query.get("q");
  const debouncedSearchKey = useDebounce(searchKey, 500);

  const {
    data: movieData,
    isLoading,
    isError,
    error,
    refetch,
  } = useSearchData(searchKey);
  
  useEffect(() => {
    if (debouncedSearchKey !== "") {
      refetch();
    } else {
      navigate("/browse");
    }
  }, [debouncedSearchKey]);

  const movieClick = movie => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Empty>{error.message}</Empty>;

  return (
    <SearchContainer>
      {movieData.length > 0 && movieData[0].backdrop_path !== null ? (
        <RowContainer>
          <Title>{`${searchKey}: 관련 콘텐츠`}</Title>
          {movieData.map(
            movie =>
              movie.backdrop_path && (
                <RowSearch
                  key={movie.id}
                  movie={movie}
                  movieClick={movieClick}
                />
              )
          )}
          {modalOpen && (
            <Modal
              {...movieSelected}
              setModalOpen={setModalOpen}
            />
          )}
        </RowContainer>
      ) : (
        <Empty>
          <p>
            {`입력하신 검색어 "${debouncedSearchKey}"(와)과 일치하는 결과가 없습니다.`}
          </p>
          <p>추천 검색어:</p>
          <ul>
            <li>다른 키워드를 입력해 보세요.</li>
            <li>시리즈나 영화를 찾고 있으신가요?</li>
            <li>
              영화 제목, 시리즈 제목, 또는 배우나 감독의 이름으로 검색해 보세요.
            </li>
            <li>
              코미디, 로맨스, 스포츠 또는 드라마와 같은 장르명으로 검색해
              보세요.
            </li>
          </ul>
        </Empty>
      )}
    </SearchContainer>
  );
}
