import React, { Component } from 'react';
import axios from 'axios';
import ReviewItem from './ReviewItem.jsx';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this)
  }

  getReviews = async () => {
    try {
      const results = await axios.get('/reviews');
      this.setState({
        reviews: results.data
      });
      console.log(results.data)
    } catch (err) {
      console.error('Could not fetch reviews: ' + err)
    }
  }

  componentDidMount() {
    this.getReviews();
  }


  render() {
    return (
      <div>
        {this.state.reviews.map((review, index) => {
          return <ReviewItem review={review} key={index}/>
        })}
      </div>
    );
  }

}

export default Reviews;