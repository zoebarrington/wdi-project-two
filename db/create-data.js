const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Blog = require('../models/blog');

Blog.collection.drop();

const blogData = [{
  name: 'Intro',
  dayNumber: -1,
  distance: '0',
  image: 'gablog1.jpeg',
  blogContent: 'hello'
}, {
  name: 'All the Gear, No Idea',
  dayNumber: 0,
  distance: '0',
  image: '',
  blogContent: 'Happy Canada Day!!! We did our first and final practice ride today round Stanley Park. Somehow managed to lose each other and had to meet back at home. Simultaneously hilarious and worrying. Accommodation provided by our lovely Canadian friends Sasha, Claire, Jeremiah and Lexi. Padre sleeping on the bottom floor, could hear him snoring from the top. Must remember to invest in some ear plugs. 5am start tomorrow. Absolutely terrified.'
}, {
  name: 'Big UP !!',
  dayNumber: 1,
  distance: '98km, 1,368m elevation, 1,103m descent',
  image: 'day1.jpeg',
  blogContent: '(98km, 1,368m elevation, 1,013m descent) Breakfast at Tim Hortons, followed by a 17 km climb to ease us into the trip. Please enjoy a photo of el padre, balding, exhausted and wondering what he got himself into.Sash and Claire decided to follow us in a car for the first couple days. They say they came for the views but I’m sure pretty sure they’re worried we’ll roll down the hills, not up. Got Rogers Creek where we were camping at around 4pm. Set up camp, ate some pasta, and were asleep by 7:30pm. Delightful.'
}, {
  name: 'Silly',
  dayNumber: 2,
  distance: '80kms, 1,207m elevation, 1,163m descent',
  image: 'day2.jpeg',
  blogContent: 'What a silly day. Downhills were strangely worse than the uphills. Had to stop on one of the steeper ones and there were cars on the side of the road giving theirs breaks a rest as well. Silly.'
}, {
  name: 'It is hot!!',
  dayNumber: 3,
  distance: '76kms, 449m elevation, 925m descent',
  image: 'day3.1jpeg',
  blogContent: 'Long day at the office. Relatively flat cycling. Relatively boring scenery. Extraordinary heat. We came down from the mountains into Copper Desert Country and the temperature rose quite dramatically to 39 degrees, and very dry. Here’s a photo I took when I thought I would die. We had a two hour break at a farm with Sash and Claire and continued card games from last night. Then we said our goodbyes as Sash and Claire drove back to Vancouver and we continued on our slower transportation. Reached our campsite next to Steelhead Lake at around 3:30pm. Never been more excited to see water in this heat. Lay in the lake for 500 hours. '
}, {
  name: 'Ups and Downs',
  dayNumber: 4,
  distance: '48kms, 1,1464m elevation, 1,460m descent',
  image: 'day4.jpeg',
  blogContent: 'Today was very much filled with ups and downs, with some seriously good bits and some seriously bad bits. Bad bits featuring nearly running out of water, 40 degree heat and a lack of road that wasnt uphill. Good bits made up of finding water (we pretty much took a shower in a gas station tap), and the most exciting event of the trip yet – staying in a hotel, instead a tent! I also attached a picture of the best grilled cheese sandwich I’ve ever had ever. Arrived into the city of Kamloops about 1:30pm, having spent the past 5 hours cycling singing a song about the prospect of showering and sleeping in a bed. Decided on the Sandman Inn on the basis that it was the first place we saw. Paul at reception was a bit overwhelmed by our excitement, but showed us to our room where we had our first shower and are now about to sleep till 2022.'
}, {
  name: 'Rest day',
  dayNumber: 5,
  distance: '0',
  image: 'day5.jpeg',
  blogContent: 'Today was a rest day and it was wonderful. Ate 3/3 meals at Denny’s and watched Wimbledon all day. Wonderful.'}
];

Blog
  .create(blogData)
  .then(result => {

    console.log(`created ${result.length} blogposts!`);
    mongoose.connection.close();
  });
