const router = require("express").Router();
const sightingRoutes = require("./sightings");

// Post routes
router.use("/sightings", sightingRoutes);

module.exports = router;
