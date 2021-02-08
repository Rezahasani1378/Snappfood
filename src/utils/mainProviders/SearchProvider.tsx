import React, { useReducer, createContext } from 'react';

export const SearchContext = createContext('');

const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export interface State {
  searchText: string;
  setSearchText?: (searchText: string) => void;
}

const themeReducer = (
  state: State,
  action: { type: string; payload: State },
) => {
  if (action.type === SET_SEARCH_TEXT) return { searchText: action.payload.searchText };

  return state;
};

export const SearchProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(themeReducer, { searchText: 'light' });

  const setSearchText = (searchText: string) => {
    dispatch({
      type: SET_SEARCH_TEXT,
      payload: { searchText },
    });
  };

  const value: State = { searchText: state.searchText, setSearchText };

  return (
    // @ts-ignore
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
