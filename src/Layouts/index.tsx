import React from 'react';
import './index.less';
import { SearchProvider } from '@/utils/mainProviders/SearchProvider';
import Navigation from '@/components/Navigation';

export default ({ children }: { children: object }) => {
  return (
    <SearchProvider>
      <Navigation />
      {children}
    </SearchProvider>
  );
};
