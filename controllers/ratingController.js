const Blog = require('../models/blog');

//creating a rating route
function createRoute(req, res) {
  Blog.findById(req.params.blogId)
    .then(blog => {
      console.log('Creating a comment!', blog, req.body);
      //adding a rating to the blog's ratings array
      blog.ratings.push(req.body);
      blog.save().then(() => res.redirect('/blog'));
    });
}

//delete route for deleting a ratings
function deleteRoute(req, res) {
  console.log('deleting rating', req.params.ratingId);
  //redirect to the show homepage
  Blog.findById(req.params.blogId)
    .then(blog => {
      blog.ratings.id(req.params.ratingId).remove();
      blog.save()
        .then(() => res.redirect(`/blog/${req.params.blogId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
