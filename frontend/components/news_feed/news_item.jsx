import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NewsItem= ({ story }) => {
  let img;
  if (story.image) {
      img = story.image.thumbnail.contentUrl;
  } else {
    img = "http://res.cloudinary.com/dxucikdys/image/upload/v1500663273/placeholder_duuvvw.jpg";
  }
  return (
    <div className="story-box">
      <div className="news-image-box">
        <img className="news-image" src={img} />
      </div>
      <div className="news-content-box">
        <a className="news-content-title" href={story.url}>
          {story.name}
        </a><br/>
        <span className="news-content-description">
          {story.description}
        </span>
      </div>
    </div>
  );
};

export default NewsItem;
