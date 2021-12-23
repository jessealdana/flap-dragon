const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flap-dragon");

const sightingSeed = [
  {
    title: "Snow Dragon Crunch",
    author: "Gnar",
    body:
      "Watch out for the Snowy on Pyre's Spire, man.  It's truly angry and extra.",
    date: new Date(Date.now())
  },
  {
    title: "Shimmer",
    author: "The Traveler",
    body:
      "Ruuuuunnnnn!",
    date: new Date(Date.now())
  },
  {
    title: "Peach Dragon Summer",
    author: "Farmer Ted",
    body:
      "Looks like we've got a resident flock here on Wellmore Farm. At least a dozen Peach Dragons patrol our orchard.  Thankfully, they don't attack anything bigger than a housecat.",
    date: new Date(Date.now())
  }
];

db.Sighting.remove({})
  .then(() => db.Sighting.collection.insertMany(sightingSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
