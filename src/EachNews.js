import React from "react";

const EachNews = ({ data }) =>{
  return (
    <div className="eachnews">
      <h1 className="title">{data.title}</h1>
      <p className="description">{data.description}</p>
      <span className="source">{data.source.name}</span>
    </div>
  );
}

export default EachNews;
