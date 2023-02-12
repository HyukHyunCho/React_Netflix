import React from 'react'
import { useLocation } from 'react-router-dom';
import Empty from '../../components/Empty';
import Video from '../../components/Video';

export default function VideoForm() {

  const {
    state,
  } = useLocation();
  
  return (
    <>
      {state.videos.results[0] ? (
        <Video movie={state} />
      ) : (
        <Empty>
          <p>영상이 없습니다.</p>
        </Empty>
      )}
    </>
  );
}
