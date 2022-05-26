import React, { Component } from 'react';

const ArtDisplay = (props) => {
  // const data = fetch(`/api/art?id=${props.artId}`)
  //   .then(res => res.json())
  //   .catch(err => console.log('ArtDisplay: get display info: ERROR: ', err));
  // console.log(data);
  const {data} = props;

  return (
    <article className="artDisplay">
      <div className="artImgContainer">
        <img className="charName" src={data.src}></img>
      </div>
      <ul className="artLabel">
        <li className="artDetail"><strong>{data.artistDisplayName}</strong> ({data.artistDisplayBio})</li>
        <li className="artDetail"><strong><em>{data.title}</em></strong></li>
        <li className="artDetail">{data.medium}</li>
        <li className="artDetail"><em>{data.culture || ''} {data.period || ''} {data.dimensions}</em></li>
      </ul>
    </article>
  );
};

export default ArtDisplay;