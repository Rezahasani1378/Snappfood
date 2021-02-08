import React from 'react';
import './styles.less';
import RestaurantList from '@/components/RestaurantList';
import { RestaurantsProvider } from '@/utils/mainProviders/RestaurantsProvider';

export default () => {
  return (
    <RestaurantsProvider>
      <RestaurantList />
    </RestaurantsProvider>
  );
};
