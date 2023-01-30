import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieSearchData } from "../services/axios";
import Spinner from "../components/Spinner/Spinner";
import styled from "styled-components";
import Empty from "../components/Empty/Empty";

export default function Search() {
  const navigate = useNavigate();
  const useParam = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useParam();
  const searchKey = query.get("q");

  const {
    data: movieData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["searchData"], () => MovieSearchData(searchKey), {
    retry: 0,
  });

  useEffect(() => {
    if (searchKey !== "") {
      refetch();
    } else {
      navigate("/browse");
    }
  }, [searchKey]);

  if (isLoading) return <Spinner />;
  if (isError) return <Empty>{error.message}</Empty>;
  
  return (
    <Container>
      {movieData.length > 0 && movieData[0].backdrop_path !== null ? (
        <RowContainer>
          <Title>{`${searchKey}: 관련 콘텐츠`}</Title>
          {movieData.map(
            movie =>
              movie.backdrop_path && (
                <RowItem
                  key={movie.id}
                  alt={movie.name}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
              )
          )}
        </RowContainer>
      ) : (
        <Empty>
          <p>
            {`입력하신 검색어 "${searchKey}"(와)과 일치하는 결과가 없습니다.`}
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
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  padding: 2.5rem;
`;
const RowContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
`;
const Title = styled.div`
  font-size: 28px;
  text-style: bold;
  color: #fff;
`;
const RowItem = styled.img`
  box-sizing: border-box;
  width: 16.5%;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px 2px 20px 2px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  @media screen and (max-width: 1100px) {
    width: 25%;
  }
  @media screen and (max-width: 800px) {
    width: 33%;
  }
  @media screen and (max-width: 500px) {
    width: 49%;
  }
`;

// @media screen and (max-width: 1100px) {
//     width: 22.8vw;
//   }
//   @media screen and (max-width: 800px) {
//     width: 30vw;
//   }
//   @media screen and (max-width: 500px) {
//     width: 45vw;
//   }