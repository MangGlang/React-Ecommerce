import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      <div className="book__ratings">
        {
          // underscore "_" element = "useless" element
          // key index only required when mapping arrays
          new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FontAwesomeIcon icon="star" key={index} />
          ))
        }
        {
          // if book rating is integer, do nothing. otherwise, print half star
          // Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt"/>

          // if first condition = true, then render and display half stars onto paeg
          // if first condition = false, render nothing.
          // if number is not integer, then print half star.
          !Number.isInteger(rating) && (
            <FontAwesomeIcon icon="star-half-alt" />
          )
        }
      </div>
    </div>
  );
};

export default Rating;
