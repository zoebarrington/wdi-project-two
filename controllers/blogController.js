const Blog = require('../models/blog');

function indexRoute(req, res) {
  //find all blog posts, then render an ejs file - the find returns an array
  Blog.find().then(function(result) {
    const blogObject = {
      blog: result
    };
    res.render('blog/index', blogObject);
  });
}

//NEW route
function newRoute(req,res) {
  res.render('blog/new');
}

//CREATE route
function createRoute(req, res) {
  Blog.create(req.body)
    .then(result => res.redirect(`/blog/${result._id}`));
}

//SHOW route
function showRoute(req, res) {
  //get blogpost out of the database using its id
  //then get a particular blog post out then render an ejs file
  Blog.findById(req.params.id).then(result => {
    res.render('blog/show', result);
  });
}

//UPDATE route
function updateRoute(req, res) {
  //req.params.id is the id of the blogpost we are trying to update
  //then we update the database using the model and the new data
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/blog');
    });
}

//EDIT route
//get the blogpost from the data database
//findById return an object, that we can then hand straight into the ejs file
function editRoute(req, res) {
  Blog.findById(req.params.id)
    .then(result => {
      res.render('blog/edit', result);
    });
}

//DELETE route
function deleteRoute(req,res) {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/blog'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
