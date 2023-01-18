import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import Footer from "../components/Footer/Footer";
import requests from "../api/requests";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        id="1"
        title="오직 넷플릭스에서만"
        fetchUrl={requests.fetchNetflixOriginals}
        // isLargeRow
      />
      <Row id="2" title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
      <Footer />
    </>
  );
};
