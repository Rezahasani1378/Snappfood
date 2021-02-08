import React, { useReducer, useCallback } from 'react';

function isFunction(functionToCheck: any) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhanceDispatch = useCallback((action: any) => {
    if (isFunction(action))
      action(dispatch);
    else
      dispatch(action);
  }, [dispatch]);

  return [state, enhanceDispatch];
};

export default useThunkReducer;
