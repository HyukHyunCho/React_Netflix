import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MovieData, MovieSearchData } from '../services/axios';
import Spinner from '../components/Spinner/Spinner';
import styled from 'styled-components';
import Empty from '../components/Empty/Empty';

export default function Search() {
  const navigate = useNavigate();
  const useParam = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useParam();
  const searchKey = query.get('q');

  const {
    data: movieData,
    isLoading,
    error,
    refetch,
  } = useQuery(['searchData'], () => MovieSearchData(searchKey), {
      retry: 0,
    }
  );

  useEffect(() => {
    console.log(searchKey);
    if (searchKey !== '') {
      refetch();
    } else {
      console.log('asd');
      navigate('/browse');
    }
  }, [searchKey]);

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;

  return (
    <Container>
      {movieData.length > 0 ? (
        <RowContainer>
          {movieData.map((movie) => (
            movie.backdrop_path && 
            <RowItem
              key={movie.id}
              alt={movie.name}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          ))}
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
// flex-wrap: wrap;
//   justify-content: center;
const Container = styled.div`
  display: flex;
  background-color: #000;
`;
const RowContainer = styled.div`
  padding: 125px;
`;
const RowItem = styled.img`
  width: 15vw;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px 5px;
`;
