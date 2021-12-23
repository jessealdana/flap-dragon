import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_SIGHTING, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getSighting(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_SIGHTING, sighting: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      sighting: state.currentSighting
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentSighting._id
    });
  };

  return (
    <>{state.currentSighting ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div>
              <h1>
                {state.currentSighting.title} by {state.currentSighting.author}
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1 style={{backgroundColor: "red", color: "white"}}>Alert:</h1>
              <p>{state.currentSighting.body}</p>
            </article>
          </Col>
            {state.favorites.indexOf(state.currentSighting) !== -1 ? (
                    <button className="btn btn-danger" onClick={removeFavorite}>
                        Remove from High Alerts
                    </button>
                ) : (
                    <button className="btn" onClick={addFavorite}>
                         Add to High Alerts
                    </button>
                    )                
            }
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Sightings</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;
