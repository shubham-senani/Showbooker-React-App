import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Contextpage from "../ContextPage";
import styled from "styled-components";

const ShowDetail = () => {
  const { movies, fetchMovies } = useContext(Contextpage);

  useEffect(() => { 
    fetchMovies();
  }, []);


  const { id } = useParams();
  const cardData = movies.find((card) => card.show.id === Number(id));

  if (!cardData) {
    return <div>Loading........</div>;
  }

  return (
    <Wrap className="container">
      <div
        className="show-card"
        style={{ backgroundImage: `url(${cardData.show.image.original})` }}
      >
        <div className="show-card__overlay"></div>
        <div className="show-card__share">
          <button className="show-card__icon">
            <i className="material-icons">&#xe87d;</i>
          </button>
          <button className="show-card__icon">
            <i className="material-icons">&#xe253;</i>
          </button>
          <button className="show-card__icon">
            <i className="material-icons">&#xe80d;</i>
          </button>
        </div>
        <div className="show-card__content">
          <div className="show-card__header">
            <h1 className="show-card__title"> {cardData.show.name} </h1>
            <h4 className="show-card__info">
              {cardData.show.premiered.substring(0, 4)}{" "}
              {cardData.show.genres[0]}, {cardData.show.genres[1]}
            </h4>
          </div>
          <p className="show-card__desc">
            {cardData.show.summary
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("<b>", "")
              .replace("</b>", "")}
          </p>
          <Link
            to={`/ticket/${cardData.show.name}`}
            className="btn btn-outline show-card__button"
            type="button"
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </Wrap>
  );
};

export default ShowDetail;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 85vh;
  width: 100vw;

  .show-card {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    min-height: 300px;
    display: block;
    margin: 3vh auto;
    border-radius: 8px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
    position: relative;

    @media screen and (max-width: 800px) {
      width: 95%;
      max-width: 95%;
    }
    @media screen and (max-width: 600px) {
      background-position: 50% 0%;
      background-size: cover;
      height: 600px;
    }

    .show-card__overlay {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: linear-gradient(
        to right,
        rgba(42, 159, 255, 0.2) 0%,
        #212120 60%,
        #212120 100%
      );
      background-blend-mode: multiply;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      @media screen and (max-width: 600px) {
        background: linear-gradient(
          to bottom,
          rgba(42, 159, 255, 0.2) 0%,
          #212120 60%,
          #212120 100%
        );
      }
    }

    .show-card__share {
      padding: 1em;
      display: inline-block;
      width: 100%;
      max-width: 230px;

      @media screen and (max-width: 600px) {
        display: block;
        width: 100%;
      }

      .show-card__icon {
        color: #ffffff;
        mix-blend-mode: lighten;
        opacity: 0.4;
        background: none;
        padding: 0;

        .show-card__icon:not(:first-of-type) {
          margin-left: 5px;
        }
        .show-card__icon i {
          font-size: 1.2em;
        }
      }
    }

    .show-card__content {
      width: 100%;
      max-width: 400px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      float: right;
      padding-right: 1.2em;
      padding-bottom: 1em;

      @media screen and (max-width: 1000px) {
        width: 50%;
      }
      @media screen and (max-width: 600px) {
        margin-top: 4.2em;
        width: 100%;
        float: inherit;
        max-width: 100%;
        padding: 0 1em 1em;
      }

      .show-card__header {
        margin-bottom: 2em;

        .show-card__title {
          color: #ffffff;
          margin-bottom: 0.25em;
          margin-top: 0.5em;
          font-weight: 400;
          opacity: 0.75;
        }
        .show-card__info {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8em;
          color: #2a9fff;
          line-height: 1;
          margin: 0;
          font-weight: 700;
          opacity: 0.6;
        }
      }

      .show-card__desc {
        font-weight: 300;
        opacity: 0.74;
        margin-bottom: 2em;
        color: rgb(199, 199, 199);
      }

      .btn {
        padding: 0.5rem 2rem;
        background-color: rgba(255, 255, 255, 0.4);
        color: white;
      }

      .btn-outline {
        background-color: transparent;
        border: 3px solid #ffffff;
      }
    }
  }
`;
