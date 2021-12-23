import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_SIGHTING,
  REMOVE_SIGHTING,
  UPDATE_SIGHTINGS,
  ADD_SIGHTING,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_SIGHTING:
    return {
      ...state,
      currentSighting: action.sighting,
      loading: false
    };

  case UPDATE_SIGHTINGS:
    return {
      ...state,
      sightings: [...action.sightings],
      loading: false
    };

  case ADD_SIGHTING:
    return {
      ...state,
      sightings: [action.sighting, ...state.sightings],
      loading: false
    };

  case REMOVE_SIGHTING:
    return {
      ...state,
      sightings: state.sightings.filter((sighting) => {
        return sighting._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.sighting, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((sighting) => {
        return sighting._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    sightings: [],
    currentSighting: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
