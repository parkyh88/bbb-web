import React from 'react';

const ComicsListItem = ({ comic }) => {
  const { title, url } = comic;
  return (
    <li className="comics-item">
      <img src={url} alt={title} className="comic-profile-picture" />
      <p className="comic-profile-title">웹툰 제목</p>
    </li>
  );
};

export default ComicsListItem;
