import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.less';
import { isBottom } from '@/utils/functions/functions';
import { RestaurantsContext } from '@/utils/mainProviders/RestaurantsProvider';
import Restaurant from '@/components/RestaurantList/Restaurant';

const RestaurantList = () => {
  const [isEndPage, setIsEndPage] = useState(false);

  const { addToRestaurants, restaurants, isLoading } = useContext(RestaurantsContext);
  const restaurantsRef = useRef();

  const trackScrolling = () => {
    const wrappedElement = restaurantsRef.current;
    if (isBottom(wrappedElement) && !(wrappedElement.offsetHeight <= 100)) {
      setIsEndPage(true);
      if (typeof document !== 'undefined')
        document.removeEventListener('scroll', trackScrolling);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', trackScrolling);
      return () => {
        document.removeEventListener('scroll', trackScrolling);
      };
    }
  });

  useEffect(() => {
    addToRestaurants();
  }, [])

  useEffect(() => {
    if (isEndPage)
      addToRestaurants();

  }, [isEndPage]);

  const createRestaurantTags = () => {
    let tagsArray: JSX.Element[] = [];
    restaurants.forEach(restaurant => {
      if (typeof restaurant.data !== 'string' ) {
        const { title, description, id, deliveryFee, rate, countReview, backgroundImageCustom } = restaurant.data;
        tagsArray.push(
          <Restaurant
            title={title}
            description={description}
            deliveryFee={deliveryFee}
            rate={rate}
            id={id}
            countReview={countReview}
            backgroundImageCustom={backgroundImageCustom}
          />,
        );
      }
    });

    return tagsArray;
  };

  return (
    <div className="restaurantListContainer" ref={restaurantsRef}>
      {createRestaurantTags()}
    </div>
  );
};

export default RestaurantList;
