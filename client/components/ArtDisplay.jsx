import React from 'react';

const ArtDisplay = ({info}) => {
  const {
    src, title, artist
  } = info;

  return (
    <article className="artDisplay">
      <div className="artImgContainer">
        <img className="charName" src={src}></img>
      </div>
      <ul className="artLabel">
        <li className="artDetail">Title: {title}</li>
        <li className="artDetail">Artist: {artist}</li>
      </ul>
    </article>
  );
};

export default ArtDisplay;