import React from 'react';
import './index.less';
import { SearchProvider } from '@/utils/mainProviders/SearchProvider';
import Navigation from '@/components/Navigation';
import { useScrollToTop } from '@/utils/CustomHooks/useScrollToTop';

export default ({ children }: { children: object }) => {
  useScrollToTop();

  return (
    <SearchProvider>
      <Navigation />
      {children}
    </SearchProvider>
  );
};
