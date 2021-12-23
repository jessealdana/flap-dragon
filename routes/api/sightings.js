const router = require("express").Router();
const sightingsController = require("../../controllers/sightingsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(sightingsController.findAll)
  .post(sightingsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(sightingsController.findById)
  .put(sightingsController.update)
  .delete(sightingsController.remove);

module.exports = router;
