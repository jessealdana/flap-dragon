import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here are All Sightings Designated High Alerts</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a sighting to view it in detail</h3>
          {state.favorites.map(sighting => (
            <ListItem key={sighting._id}>
              <Link to={"/sightings/" + sighting._id}>
                <strong>
                  {sighting.title} by {sighting.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(sighting._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any High Alerts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
