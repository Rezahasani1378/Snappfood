import React from 'react';
import './styles.less';
import { Link } from 'umi'

const Restaurant = ({ title, id, description, deliveryFee, rate, countReview, backgroundImageCustom }) => {
  return (
    <Link className="restaurantCard" to={`restaurants/${id}`}>
      <div className="restaurantCard__details">
        <div className="restaurantCard__details--image">
          <img src={backgroundImageCustom} alt={`${title} رستوران`} />
        </div>
        <div className="restaurantCard__details__titleAndDescription">
          <div className="restaurantCard__details__titleAndDescription--title">
            {title}
          </div>
          <div className="restaurantCard__details__titleAndDescription--description">
            {description}
          </div>
        </div>
      </div>
      <div className="restaurantCard__deliveryAndRating">
        <div className="restaurantCard__deliveryAndRating--deliveryFee">
          {deliveryFee} تومان
        </div>
        <div className="restaurantCard__deliveryAndRating__rating">
          <div className="restaurantCard__deliveryAndRating__rating--reviewCount">
            ( {countReview} )
          </div>
          <div className="restaurantCard__deliveryAndRating__rating--rateCount">
            {rate}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
