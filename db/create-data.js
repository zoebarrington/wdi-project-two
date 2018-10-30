const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Blog = require('../models/blog');

Blog.collection.drop();

const blogData = [{
  name: 'Intro',
  dayNumber: -1,
  distance: 0,
  image: 'gablog1.jpeg',
  blogContent: 'hello'
}];

Blog
  .create(blogData)
  .then(result => {

    console.log(`created ${result.length} blogposts!`);
    mongoose.connection.close();
  });
