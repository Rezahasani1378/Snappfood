import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.less';
import { isBottom } from '@/utils/functions/functions';
import { RestaurantsContext } from '@/pages/Restaurants/Providers/RestaurantsProvider';
import Restaurant from '@/components/RestaurantList/Restaurant';
import Loading from '@/components/Loading/Loading';

const RestaurantList = () => {
  const { addToRestaurants, restaurants, isLoading, count, pageNumber } = useContext(RestaurantsContext);

  const pageSize = 10;

  const [lastPage, setLastPage] = useState(0);
  const [query, setQuery] = useState(`page=${pageNumber}&page_size=${pageSize}`);

  const restaurantsRef = useRef();

  const trackScrolling = () => {
    const wrappedElement = restaurantsRef.current;
    if (isBottom(wrappedElement) && !(wrappedElement.offsetHeight <= 100)) {
      setQuery(`page=${pageNumber}&page_size=${pageSize}`);
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
    setLastPage(Math.round(count / pageSize));
  }, [count]);

  useEffect(() => {
    if (pageNumber <= lastPage)
      addToRestaurants(query);
  }, [query]);

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
    <div className="restaurantListContainer"
         style={{ marginTop: restaurants.length > 0 ? 70 : 0 }}
         ref={restaurantsRef}>
      {createRestaurantTags()}
      {isLoading && <Loading color="#007bff" isLastPage={pageNumber > lastPage} />}
    </div>
  );
};

export default RestaurantList;
