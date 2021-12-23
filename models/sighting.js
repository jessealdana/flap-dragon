const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sightingSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const Sighting = mongoose.model("Sighting", sightingSchema);

module.exports = Sighting;
