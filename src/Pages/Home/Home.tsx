import React from "react";
import Categores from "../Categores";
import Slider from "../Slider";
import PopularPost from "../PopularPost";
import Calendar from "../Calendar";
import Newpost from "../Newpost";
import LatestVideos from "../LatestVideos";
import TrendyPosts from "../TrendyPosts";
import Weather from "../Weather";
import TopPosts from "../TopPosts";

function Home() {
  return (
    <div>
      <Categores />
      <Slider />
      <PopularPost />
      <Calendar />
      <Newpost />
      <LatestVideos />
      <TrendyPosts />
      <Weather />
      <TopPosts />
    </div>
  );
}

export default Home;
