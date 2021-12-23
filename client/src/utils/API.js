import axios from "axios";

export default {
  // Gets all posts
  getSightings: function() {
    return axios.get("/api/sightings");
  },
  // Gets the post with the given id
  getSighting: function(id) {
    return axios.get("/api/sightings/" + id);
  },
  // Deletes the post with the given id
  deleteSighting: function(id) {
    return axios.delete("/api/sightings/" + id);
  },
  // Saves a post to the database
  saveSighting: function(sightingData) {
    return axios.post("/api/sightings", sightingData);
  }
};
