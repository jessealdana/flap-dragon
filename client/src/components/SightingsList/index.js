import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_SIGHTING, UPDATE_SIGHTINGS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function SightingsList() {
  const [state, dispatch] = useStoreContext();

  const removeSighting = id => {
    API.deleteSighting(id)
      .then(() => {
        dispatch({
          type: REMOVE_SIGHTING,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getSightings = () => {
    dispatch({ type: LOADING });
    API.getSightings()
      .then(results => {
        dispatch({
          type: UPDATE_SIGHTINGS,
          sightings: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getSightings();
  }, []);

  return (
    <div style={{backgroundColor: "rgb(207, 236, 232", marginTop: "5px", padding: "10px"}}>
      <h1 style={{backgroundColor: "whitesmoke"}}>All Sightings</h1>
      <h3 className="mb-5 mt-5" style={{backgroundColor: "whitesmoke"}}>Click on a sighting to view</h3>
      {state.sightings.length ? (
        <List>
          {state.sightings.map(sighting => (
            <ListItem key={sighting._id}>
              <Link to={"/sightings/" + sighting._id}>
                <strong>
                  {sighting.title} by {sighting.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeSighting(sighting._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>There haven't been any sighting yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites" style={{backgroundColor: "whitesmoke"}}>View High Alerts</Link>
      </div>
    </div>
  );
}

export default SightingsList;
