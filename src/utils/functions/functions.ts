export const isBottom = (el: { getBoundingClientRect: () => { (): any; new(): any; bottom: number; }; } | null) => {
  if (el !== null)
    return (
      typeof window !== 'undefined' &&
      el.getBoundingClientRect().bottom <= window.innerHeight + 20
    );
};
