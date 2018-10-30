const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  name: String,
  dayNumber: Number,
  distance: String,
  image: String,
  blogContent: String,
  ratings: [
    {
      comment: String,
      username: String,
      score: Number
    }
  ]
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;
