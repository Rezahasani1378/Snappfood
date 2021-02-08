import React from 'react';
import RestaurantList from '@/components/RestaurantList';
import { RestaurantsProvider } from '@/utils/mainProviders/RestaurantsProvider';

export default () => {
  return (
    <RestaurantsProvider>
      <RestaurantList />
    </RestaurantsProvider>
  );
};
