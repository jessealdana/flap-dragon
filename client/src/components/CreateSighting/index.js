import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_SIGHTING, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import Eye from "../../pages/images/eye.png"

function CreateSightingForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveSighting({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_SIGHTING,
          sighting: result.data
        }, console.log(result.data));
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
    authorRef.current.value = ""
  };

  return (
    <div>
      <div className="jumbotron" style={{backgroundColor: "rgb(24, 77, 70)", marginTop: "5px", borderStyle: "solid", borderWidth: "3px", borderColor: "black"}}>
        <img src={Eye} className="img-fluid img-thumbnail" alt="eye" style={{width: "50%", height: "auto"}}/>
      </div>
      <h1 style={{backgroundColor: "rgb(207, 236, 232", padding: "5px"}}>Record a Sighting</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit} style={{backgroundColor: "rgb(207, 236, 232)", padding: "15px"}}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Document
        </button>
      </form>
    </div>
  );
}

export default CreateSightingForm;
