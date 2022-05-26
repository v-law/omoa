import React from 'react';

const ArtDisplay = props => {

  fetch(`/api/art?id=${props.exhibitID}`)
    .then(res => res.json())
    .then(info => {
      const { src, title, artist, culture, period, artistDisplayName, artistDisplayBio, medium, dimensions } = info;
    })
    .catch(err => console.log('ArtDisplay: get display info: ERROR: ', err));

  return (
    <article className="artDisplay">
      <div className="artImgContainer">
        <img className="charName" src={src}></img>
      </div>
      <ul className="artLabel">
        <li className="artDetail">Title: {title}</li>
        <li className="artDetail">Artist: {artistDisplayName}</li>
        <li className="artDetail">({artistDisplayBio})</li>
        <li className="artDetail">Culture: {culture}</li>
        <li className="artDetail">Period: {period}</li>
        <li className="artDetail">Medium: {medium}</li>
        <li className="artDetail">Dimensions: {dimensions}</li>
      </ul>
    </article>
  );
};

export default ArtDisplay;