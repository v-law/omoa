import React from 'react';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const CharacterCard = ({
  info, openModal
}) => {
  const {
    title, artist, label,
  } = info;

  const openDetailsModal = (e, type, id) => {
    const top = e.pageY;
    const left = e.pageX;
    openModal(type, { top, left }, id);
  };

  return (
    <article className="display artDisplay">
      <div className="artHeadContainer">
        <h3 className="artTitle">{title}</h3>
      </div>
      <ul className="artDetailsList">
        <li className="artDetail">Artist: {artist}</li>
        <li className="artDetail">Label: {label} <span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'pink'}} onClick={e => openDetailsModal(e, 'painting', painting_id)} /></span></li>
      </ul>
    </article>
  );
};

export default ArtDisplay;