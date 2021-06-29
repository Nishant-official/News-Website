import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import EachNews from "./EachNews";

const AllNews = (props) =>{
  const { data } = useContext(NewsContext);
  return (
    <div>
      <h1 className="heading">News</h1>
      <div className="allnews">
      {data
          ? data.articles.map((news) => (
              <EachNews data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default AllNews;
