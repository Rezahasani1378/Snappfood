import React, { useReducer, createContext, useCallback } from 'react';
import useThunkReducer from '@/utils/CustomHooks/useThunkReducer';
import { baseURL, defaultApi } from '@/utils/API';

export const RestaurantsContext = createContext('');

const ADD_TO_RESTAURANTS = 'ADD_TO_RESTAURANTS';
const REASSIGN_RESTAURANTS = 'REASSIGN_RESTAURANTS';
const LOADING = 'LOADING';

const initialState = {
  isLoading: true,
  restaurants: [],
};

const reducer = (state, action) => {
  if (action.type === ADD_TO_RESTAURANTS)
    return { isLoading: false, restaurants: state.restaurants.concat(action.payload.restaurants) };
  else if (action.type === REASSIGN_RESTAURANTS)
    return { isLoading: false, restaurants: action.payload };
  else if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }

  return state;
};

export const RestaurantsProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  const fetchRestaurants = () => {
    dispatch({ type: LOADING });
    defaultApi.get(`${baseURL}restaurant/vendors-list?extra-filter=%7B%22vendor_collection%22:0,%22distance_sort%22:false,%22vendor_count_respect%22:false,%22vendor_collection_view_mode%22:%22%22,%22banner_collection%22:false,%22new_home%22:true,%22new_home_section%22:%22SERVICES%22,%22page_supertype%22:null,%22user_base_list%22:false,%22only_vendor_ids%22:null%7D&locale=fa&lat=34.566&long=50.817&showNoOrder=0&mode=CURRENT&page=0&page_size=10&more=true&filters=%7B%22superType%22:[1],%22mode%22:%22CURRENT%22%7D&client=PWA&optionalClient=PWA&deviceType=PWA&appVersion=5.3.2&optionalVersion=5.3.2&UDID=ba1dddf5-ef99-4af0-88f8-bc348ed9f9b0`)
      .then(response => {
        dispatch({ type: ADD_TO_RESTAURANTS, payload: { restaurants: response.data.data.finalResult } });
      });
  };

  const addToRestaurants = useCallback(() => {
    dispatch(fetchRestaurants);
  }, [dispatch]);

  const { isLoading, restaurants } = state;

  const value = { addToRestaurants, isLoading, restaurants };

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};