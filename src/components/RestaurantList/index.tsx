import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.less';
import { isBottom } from '@/utils/functions/functions';
import { RestaurantsContext } from '@/utils/mainProviders/RestaurantsProvider';
import Restaurant from '@/components/RestaurantList/Restaurant';
import Loading from '@/components/Loading/Loading';

const RestaurantList = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { addToRestaurants, restaurants, isLoading } = useContext(RestaurantsContext);
  const restaurantsRef = useRef();

  const trackScrolling = () => {
    const wrappedElement = restaurantsRef.current;
    if (isBottom(wrappedElement) && !(wrappedElement.offsetHeight <= 100)) {
      setPageNumber(pageNumber + 1);
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
    const queries = {
      pageNumber,
      pageSize: 10,
    };

    if (pageNumber <= 3)
      addToRestaurants(queries);
  }, [pageNumber]);

  const createRestaurantTags = () => {
    let tagsArray: JSX.Element[] = [];
    restaurants.forEach(restaurant => {
      if (typeof restaurant.data !== 'string') {
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
      {isLoading && pageNumber <= 3 && <Loading color="#007bff" />}
    </div>
  );
};

export default RestaurantList;
