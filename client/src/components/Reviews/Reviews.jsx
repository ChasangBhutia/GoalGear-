import React from 'react';
import FakeReviews from '../../assets/FakeReviews';

const ReviewCard = ({ name, rating, review }) => (
  <div className="card mb-4 shadow-sm border-0">
    <div className="card-body">
      <p className="text-warning fs-5 mb-2">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </p>
      <p className="card-text">"{review}"</p>
      <h6 className="text-muted mt-3 mb-0">– {name}</h6>
    </div>
  </div>
);

const Reviews = () => (
  <div className="container py-5">
    <h2 className="mb-4">Customer Reviews</h2>
    <div className="row">
      {FakeReviews.map(({ id, name, rating, review }) => (
        <div className="col-md-6 col-lg-4" key={id}>
          <ReviewCard name={name} rating={rating} review={review} />
        </div>
      ))}
    </div>
  </div>
);

export default Reviews;
