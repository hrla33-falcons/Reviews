import React from 'react';
import StarRating from 'react-star-ratings';
import moment from 'moment';

const ReviewItem = ({ review }) => {
  return (
    <div>
      <h4>{review.title}</h4>
      <div className="review_meta">
        <span>
          <span>{review.rating}/5 </span>
          <span>
            <StarRating rating={review.rating} starDimension="15px" starSpacing="0px" starRatedColor="black"/>
          </span>
        </span>
        <span>
          <span> Stayed </span>
          <span>{moment(`${review.dateS}`).format('MMMM YYYY')}</span>
        </span>
      </div>
      <div className="author">
        <div>
          <span>{review.author} </span>
          <span>{review.aLocation}</span>
        </div>
      </div>
      <div className="review">
        <p>{review.review}</p>
      </div>
      <div className="review_footer">
        <div>
          <span>Published </span>
          <span>{moment(`${review.dateP}`).format('LL')}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;