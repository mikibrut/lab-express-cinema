const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET all movies */
router.get("/", async function (req, res, next) {
  try {
    const movies = await Movie.find({});
    res.render("movies", { movies });
  } catch (error) {
    next(error);
  }
});

router.get("/:movieId", async function (req, res, next) {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId);
    res.render("details", movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;