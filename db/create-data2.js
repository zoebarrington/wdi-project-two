const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Blog2 = require('../models/blog2');

Blog2.collection.drop();

const blogData2 = [{
  name: 'Intro',
  dayNumber: 0,
  distance: 0,
  image: 'public/images/gablog1.jpeg',
  blogContent: 'Ello lads. Heres a blog attempting to document my cycle from Vancouver – Calgary and then Toronto – Montreal. Will be accompanied by me old man till Calgary and then the lovely Donna Paznar from Toronto to Montreal. Absolutely terrified of the tan lines. The finish line is far away. Stay tuned…P.S. Couldnt come up with a better name. Maple syrup is delightful.'
}];

Blog2
  .create(blogData2)
  .then(result => {

    console.log(`created ${result.length} blogposts!`);
    mongoose.connection.close();
  });
