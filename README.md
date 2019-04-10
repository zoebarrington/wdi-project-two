# **All the Gear, No Idea** <img src="public/images/mapleleaf.png" style="width: 45px;"/>

All the Gear, No Idea is a remake of the cycling blog that I wrote when I cycled across Canada in the summer of 2017. Users can sign in to write, edit, delete and comment/rate blogposts.

All the Gear, No Idea is my second project from General Assembly's Web Development Immersive course. It was an individual project built within the space of a week. This project was my first attempt at backend technologies, and took place over week 6 of the course.

Launch on [Heroku](https://cross-canada-cycle-app.herokuapp.com/) or check out the GitHub
[Repo](https://github.com/zoebarrington/wdi-project-two).

## Course Curriculum:
### Week 5: Module Two   
* Node.js
* Express.js
* EJS  
* MongoDB
* User Authentication

*Full course curriculum available at bottom of page*

***

## Brief
To design a full-stack Node app that must include:

* **At least two models**
* **RESTful routes**
* **User authentication**
* **Allows users to edit, delete and add posts**
* **Is styled with Bulma, but doesn't look like Bulma**
* **Deployed on Heroku  **
* **EJS for template creation**
* **CSS framework on the front-end**

**Timeframe:** 1 week(October 2018)

## Concept

We were given three options to choose from - an Instagram clone, a restaurant review or a blogging site. I chose the blogging site and recreated the Wordpress blog I had written when I cycled across Canada.

## Home Page
![Homepage](screenshots/home-page.png)

## About Page  
![About](screenshots/about-page.png)

## Login Page  
![Login](screenshots/canada-login.gif)

## Index Page  
![Index](screenshots/index.png)

## Create Page   
![Create](screenshots/create.png)

## Show Page  
![Show](screenshots/show-page.png)


## Technologies Used
- JavaScript (ECMAScript 6)
- SCSS with Bulma and CSS animation
- Node.js
- MongoDB
- bcrypt: v3.0.0
- bluebird: v3.5.1
- body-parser: v1.18.3
- ejs: v2.6.1
- express-ejs-layout: 2.4.0
- express-session: v1.15.6
- method-override: v3.0.0
- mongoose: v5.2.5
- morgan: v1.9.0
- Git
- GitHub
- Heroku
- Google Fonts  
- Fontawesome


# Featured Piece of Code

```
function createRoute(req, res) {
  Blog.findById(req.params.blogId)
    .then(blog => {
      blog.ratings.push(req.body);
      blog.save().then(() => res.redirect('/blog'));
    });
}
```

This piece of code is taken from the create route for ratings. This was a post MVP additional feature that I felt added a lot of value to my blog site. The route finds the blog post and then pushes the rating to the body of the post. It then saves it and redirects to the index page. 

## Approach Taken

I had learnt from my first project that it was essential to reach MVP as soon as possible. With this in mind, I set out a clear plan of what MVP consisted of, using wireframes (see below).

Once I had reached MVP, I then set out to add features, animations and styling to my site.

# **Wireframes**

## Home Page  
![Home](screenshots/home-wireframe.png)

#### About Page   
![About-Wireframe](screenshots/about-wireframe.png)

### Create Page  
![Create](screenshots/create-wireframe.png)

## Bugs/Moving Forward  
* Page features overlap nav bar when scrolling down
* Any logged in user can edit/delete posts

## Future Features

My initial idea was to build a cycling site where the index page would link to many different cycle touring blogs. However, given the time frame I needed to be realistic, and decided to start with just one blog, and add more if I had time.

Moving forward, I would like to develop my site into a blogging platform where any number of cyclists can add their blog to the site.

Other features I would like to add:
* Add maps so that readers can track where on the cycling route cyclists are
* Ensure that users can only edit/delete their own posts/comments
* Add messaging so that readers can contact the cyclists and ask questions (this is a feature I would like to add having completed the course and learnt how to do messaging)

***

## Course Curriculum

> **Week 1-3** | Module One  
* HTML5
* CSS3 and CSS Animation
* Sass
* JavaScript
* jQuery

> **Week 4** | Project One

> **Week 5** | Module Two  
* Node.js
* Express.js
* EJS
* MongoDB
* User Authentication  

> **Week 6** | Project Two

> **Week 7-8** | Module Three
* AngularJS
* Token Authentication & Session Authentication
* Third-party APIs
* Mocha and Chai

> **Week 9** | Project Three

> **Week 10-11** | Module Four
* React
* JSX
* ES6

>**Week 12** | Project Four

***
## Contact
### Zoe Barrington  
Email: zlfbarrington@gmail.com

[Porfolio](zoebarrington.com) | [LinkedIn](https://www.linkedin.com/notifications/) | [GitHub](https://github.com/zoebarrington)
