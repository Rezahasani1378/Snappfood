import React, { useEffect } from 'react';

export function useScrollToTop() {
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);
}
