const mongoose = require('mongoose');

const blogSchema2 = mongoose.Schema({
  name: String,
  dayNumber: Number,
  distance: Number,
  image: String,
  blogContent: String
});

const blogModel2 = mongoose.model('Blog', blogSchema2);

module.exports = blogModel2;
