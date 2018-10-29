const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  name: String,
  dayNumber: Number,
  distance: Number,
  image: String,
  blogContent: String
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;
