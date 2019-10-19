import React from 'react';
import ComicsListItem from './ComicsListItem';
import styled from 'styled-components';

const ComicsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
  & > * {
    display: flex;
    margin: 0;
    &.comics-list-title {
      color: #333333;
      font-size: 1.5rem;
      font-weight: bold;
    }
    &.comics-list-bio {
      margin-top: 0.8rem;
      color: #8a8a8a;
      font-size: 0.95rem;
    }
  }
`;

const ComicsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ComicsBlock = styled.div`
  display: flex;
  width: auto;
  white-space: nowrap;
`;

const ComicListItemBlock = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  list-style: none;
  @media all and (min-width: 320px) {
    .comics-item {
      flex-direction: column;
      .comic-profile-picture {
        border-radius: 10px;
        height: 8rem;
        width: 8rem;
        object-fit: cover;
      }
    }
    .comic-profile-title {
      text-align: center;
    }
  }
  @media all and (min-width: 768px) {
    .comics-item {
      flex-direction: column;
      .comic-profile-picture {
        border-radius: 10px;
        height: 15rem;
        width: 15rem;
        object-fit: cover;
      }
    }
    .comic-profile-title {
      text-align: center;
    }
  }
  @media all and (min-width: 1024px) {
    .comics-item {
      flex-direction: column;
      .comic-profile-picture {
        border-radius: 10px;
        height: 20rem;
        width: 20rem;
        object-fit: cover;
      }
    }
    .comic-profile-title {
      text-align: center;
    }
  }
  @media all and (min-width: 1281px) {
    .comics-item {
      flex-direction: column;
      .comic-profile-picture {
        border-radius: 10px;
        height: 25em;
        width: 25rem;
        object-fit: cover;
      }
    }
    .comic-profile-title {
      text-align: center;
    }
  }

  .comics-item + .comics-item {
    margin-left: 1.5rem;
  }
`;

const ComicsList = ({ title, bio, comics }) => {
  return (
    <ComicsListWrapper>
      <h1 className="comics-list-title">{title}</h1>
      <p className="comics-list-bio">{bio}</p>
      <ComicsWrapper>
        <ComicsBlock>
          <ComicListItemBlock>
            {comics.map(comic => (
              <ComicsListItem key={comic.id} comic={comic} />
            ))}
          </ComicListItemBlock>
        </ComicsBlock>
      </ComicsWrapper>
    </ComicsListWrapper>
  );
};

export default ComicsList;
