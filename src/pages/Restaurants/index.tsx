import React from 'react';
import RestaurantList from '@/components/RestaurantList';
import { RestaurantsProvider } from './Providers/RestaurantsProvider';

export default () => {
  return (
    <RestaurantsProvider>
      <RestaurantList />
    </RestaurantsProvider>
  );
};
