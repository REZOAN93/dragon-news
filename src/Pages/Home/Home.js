import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsSummaryCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <p>This is Home Page {allNews.length}</p>
      {allNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
