const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Blog = require('../models/blog');

Blog.collection.drop();

const blogData = [{
  name: 'Intro',
  dayNumber: 0,
  distance: '0',
  image: 'gablog1.jpeg',
  shortSummary: 'Ello lads. Heres a blog attempting to document my cycle from Vancouver – Calgary and then Toronto – Montreal.',
  blogContent: 'Ello lads. Heres a blog attempting to document my cycle from Vancouver – Calgary and then Toronto – Montreal. Will be accompanied by me old man till Calgary and then the lovely Donna Paznar from Toronto to Montreal. Absolutely terrified of the tan lines. The finish line is far away. Stay tuned…P.S. Couldnt come up with a better name. Maple syrup is delightful.'
}, {
  name: 'All the Gear, No Idea',
  dayNumber: 0,
  distance: '0',
  image: 'bikeequip.jpg',
  shortSummary: 'Happy Canada Day!!! We did our first and final practice ride today round Stanley Park. Somehow managed to lose each other and had to meet back at home. Simultaneously hilarious and worrying.',
  blogContent: 'Happy Canada Day!!! We did our first and final practice ride today round Stanley Park. Somehow managed to lose each other and had to meet back at home. Simultaneously hilarious and worrying. Accommodation provided by our lovely Canadian friends Sasha, Claire, Jeremiah and Lexi. Padre sleeping on the bottom floor, could hear him snoring from the top. Must remember to invest in some ear plugs. 5am start tomorrow. Absolutely terrified.'
}, {
  name: 'Big UP !!',
  dayNumber: 1,
  distance: '98km, 1,368m elevation, 1,103m descent',
  image: 'day1.jpeg',
  shortSummary: 'Breakfast at Tim Hortons, followed by a 17 km climb to ease us into the trip. Please enjoy a photo of el padre, balding, exhausted and wondering what he got himself into.',
  blogContent: 'Breakfast at Tim Hortons, followed by a 17 km climb to ease us into the trip. Please enjoy a photo of el padre, balding, exhausted and wondering what he got himself into.Sash and Claire decided to follow us in a car for the first couple days. They say they came for the views but I’m sure pretty sure they’re worried we’ll roll down the hills, not up. Got Rogers Creek where we were camping at around 4pm. Set up camp, ate some pasta, and were asleep by 7:30pm. Delightful.'
}, {
  name: 'Silly',
  dayNumber: 2,
  distance: '80kms, 1,207m elevation, 1,163m descent',
  image: 'day2.jpeg',
  shortSummary: 'What a silly day. Downhills were strangely worse than the uphills. Had to stop on one of the steeper ones and there were cars on the side of the road giving theirs breaks a rest as well. Silly.',
  blogContent: 'What a silly day. Downhills were strangely worse than the uphills. Had to stop on one of the steeper ones and there were cars on the side of the road giving theirs breaks a rest as well. Silly.'
}, {
  name: 'It is hot!!',
  dayNumber: 3,
  distance: '76kms, 449m elevation, 925m descent',
  image: 'day3.1.jpeg',
  shortSummary: 'Long day at the office. Relatively flat cycling. Relatively boring scenery. Extraordinary heat.',
  blogContent: 'Long day at the office. Relatively flat cycling. Relatively boring scenery. Extraordinary heat. We came down from the mountains into Copper Desert Country and the temperature rose quite dramatically to 39 degrees, and very dry. Here’s a photo I took when I thought I would die. We had a two hour break at a farm with Sash and Claire and continued card games from last night. Then we said our goodbyes as Sash and Claire drove back to Vancouver and we continued on our slower transportation. Reached our campsite next to Steelhead Lake at around 3:30pm. Never been more excited to see water in this heat. Lay in the lake for 500 hours. '
}, {
  name: 'Ups and Downs',
  dayNumber: 4,
  distance: '48kms, 1,1464m elevation, 1,460m descent',
  image: 'day4.jpeg',
  shortSummary: 'Today was very much filled with ups and downs, with some seriously good bits and some seriously bad bits. Bad bits featuring nearly running out of water, 40 degree heat and a lack of road that wasnt uphill.',
  blogContent: 'Today was very much filled with ups and downs, with some seriously good bits and some seriously bad bits. Bad bits featuring nearly running out of water, 40 degree heat and a lack of road that wasnt uphill. Good bits made up of finding water (we pretty much took a shower in a gas station tap), and the most exciting event of the trip yet – staying in a hotel, instead a tent! I also attached a picture of the best grilled cheese sandwich I’ve ever had ever. Arrived into the city of Kamloops about 1:30pm, having spent the past 5 hours cycling singing a song about the prospect of showering and sleeping in a bed. Decided on the Sandman Inn on the basis that it was the first place we saw. Paul at reception was a bit overwhelmed by our excitement, but showed us to our room where we had our first shower and are now about to sleep till 2022.'
}, {
  name: 'Rest day',
  dayNumber: 5,
  distance: '0',
  image: 'day5.jpeg',
  shortSummary: 'Today was a rest day and it was wonderful. Ate 3/3 meals at Denny’s and watched Wimbledon all day. Wonderful.',
  blogContent: 'Today was a rest day and it was wonderful. Ate 3/3 meals at Denny’s and watched Wimbledon all day. Wonderful.'
}, {
  name: 'Birthday!!',
  dayNumber: 6,
  distance: '120kms, 385m elevation, 325m descent',
  image: 'day6.jpeg',
  shortSummary: 'Today is my birthday! And what a birthday it has been. Let me tell you about it.Kicked off with a full English and a side of pancakes from Dennys.',
  blogContent: 'Today is my birthday! And what a birthday it has been. Let me tell you about it.Kicked off with a full English and a side of pancakes from Dennys. Apologies, I took a photo mid chow, so it looks less appetising. After about 20kms, got my first puncture – really exciting. Unsurprisingly, neither me or padre knew what to do. So we spent some time looking at the bike from different angles before we were saved by Kevin, who was cycling past. Thank you Kevin.At about 2pm I developed what I’m pretty sure is heat stroke (although I’ve never had it before) and entered a state of delirium. I was an unnatural shade of rouge and started to get very dizzy and lightheaded. Time to stop. Here’s me, mid-delirium.'
}, {
  name: 'Slog',
  dayNumber: 7,
  distance: '109kms, 757m elevation, 482m descent',
  image: 'day7.jpg',
  shortSummary: 'Today was a tough day. Woke up with sore everything. After 50 kms we realised there were no stopping points for another 30kms, so we took a power nap on the side of the road and ate some melted Clif Bars.',
  blogContent: 'Today was a tough day. Woke up with sore everything. After 50 kms we realised there were no stopping points for another 30kms, so we took a power nap on the side of the road and ate some melted Clif Bars. Here’s Padre’s snoring harmonising with the traffic.Had lunch at a place called World’s Best Burgers. I can confirm that this is false advertisement.Afernoon was a bit of a slog, with rather uninspiring scenery. Climbed a 4km hill where we both contemplated what we were doing in the middle of Canada, on a bike.Got to Blue River around 6pm and shared a strawberry and rhubarb pie with our puncture saviour Kevin. We ❤️ Kevin.'
}, {
  name: 'Rest day #2',
  dayNumber: 8,
  distance: '0',
  image: 'day8.jpg',
  shortSummary: 'Rest day numero dos. Woke up with pain reminiscent of a hangover, but worse. Legs have been cramping all night. Padre experiencing the opposite, he’s paralysed to his bed.',
  blogContent: 'Rest day numero dos. Woke up with pain reminiscent of a hangover, but worse. Legs have been cramping all night. Padre experiencing the opposite, he’s paralysed to his bed. We’re a sorry pair. This is when the lack of cycling experience or training really gives you the ‘I told you so’. Went and had a steak. That seemed like the right thing to do.'
}, {
  name: 'Headwinds',
  dayNumber: 9,
  distance: '110kms, 423m elevation, 359m descent',
  image: 'day9.jpeg',
  shortSummary: 'A day so miserable it almost became fun. It was a very grey day and we were cycling into a strong headwind.',
  blogContent: 'A day so miserable it almost became fun. It was a very grey day and we were cycling into a strong headwind. This making progress slow and rather demoralising. There was nowhere to stop for 80kms, so at 50kms we cracked open the boil in the bag mushroom risotto and lit the stove. It tasted how it looks. Thoroughly dissatisfied, we continued into the wind, egged on by scenery so boring I spent most of my cycle wondering why we’d chosen Canada in the first place. The hard shoulder then became gravel-filled causing one of my panniers to break. At this point, we decided to embrace the day as bad and start having fun. Padre miraculously fixed the pannier, and we went on to enter a state of insanity that comes with forced enthusiasm. This involved a lot of singing and, on seeing this sign, a serious discussion about whether or not we should get a tattoo. After 11 hours on the road, we arrived into Tete Jaune at 7pm, quite ready for the day to be over.'
}, {
  name: 'Alberta!!!',
  dayNumber: 10,
  distance: '0',
  image: 'day10.jpeg',
  shortSummary: 'Woooohoooo!!! We have made it to Alberta!!! Here’s me dancing with happiness.',
  blogContent: 'Woooohoooo!!! We have made it to Alberta!!! Here’s me dancing with happiness. The last couple days have really been a means to an end, as the Rockies are where the sights are. There have been fires further west so the air is quite smoky. We saw some caribou. Apologies for picture quality. Other than that, not much to report. Bring on the views…'
}, {
  name: 'Bears',
  dayNumber: 11,
  distance: '55kms, 488m elevation, 152 descent',
  image: 'day11.jpeg',
  shortSummary: 'Set off late today as got caught up watching Murray get knocked out of Wimbledon. Very depressing. Left Jasper about 1pm and only got 5 kms down the road before seeing this sign. Terrifying.',
  blogContent: 'Set off late today as got caught up watching Murray get knocked out of Wimbledon. Very depressing. Left Jasper about 1pm and only got 5 kms down the road before seeing this sign. Terrifying. Bought some bear spray. No idea how to use it. Spent the next hour mistaking every rock or log for a bear, but we made it to Sunwapta Falls unharmed.Its an uphill climb to the Icefields tomorrow…'
} , {
  name: '(N)ice fields',
  dayNumber: 12,
  distance: '55kms, 488m elevation, 152 descent',
  image: 'day12.jpeg',
  shortSummary: 'What a marvellous day! Cycling in the Rockies feels like you’re cycling inside a postcard. It is magical.',
  blogContent: 'What a marvellous day! Cycling in the Rockies feels like you’re cycling inside a postcard. It is magical. As to be expected, it was a steep 45 km climb to the Icefields, but we set of early and made it there by 1pm. I present to you the Icefields. After a leisurely walk around, we headed to our campsite to find that it was full. The next accommodation was 50kms away, so at 4:30pm we set off again with stiff legs and lots of sugar. It also began to hail which was bizarre. Luckily, leaving the Icefields was pretty easy cycling, and we made it to Saskatchewan Crossing in time for dinner. Glorious day.'
}, {
  name: 'Woweee!!!',
  dayNumber: 13,
  distance: '91kms, 871m elevation, 777 descent',
  image: 'day13.jpeg',
  shortSummary: 'What a day! Blue skies led to padre going overboard on the sun cream. Calm down padre.',
  blogContent: 'What a day! Blue skies led to padre going overboard on the sun cream. Calm down padre. Set off at 7am and got to Peyto Lake for lunch by midday. It was a 10 minute walk to the lake and padre’s exact words were “I’ve seen a lake before, let’s just have lunch in the car park.” Grumpy old man eh! We did the walk, and Peyto Lake did not disappoint. It was the most beautiful sight I’ve ever seen. Photos don’t quite do it justice, but here’s one anyway. We ate our sandwiches by Peyto Lake and then continued on to Lake Louise, arriving at about 4pm. One of the best days ever.'
}, {
  name: 'Woweee!!!',
  dayNumber: 14,
  distance: '61kms, 139m elevation, 299 descent',
  image: 'day14.jpeg',
  shortSummary: 'Waaaahhhhheeyyyy we made it to Banff!!!! Very sad to have had my last day cycling with el Padre. Got a puncture in my back tyre 10kms from Banff, as a goodbye gift.',
  blogContent: 'Waaaahhhhheeyyyy we made it to Banff!!!! Very sad to have had my last day cycling with el Padre. Got a puncture in my back tyre 10kms from Banff, as a goodbye gift. Got to Banff at around 5pm and went to our lovely family friend’s house, the Roberts, where we were staying for the night. We all went out for dinner, where Padre proceeded to drink himself into unconsciousness. Here’s a picture of Padre laughing at his own joke. The glasses and hat have no explanation. Alcoholic tendencies aside though, he truly is an absolute legend and I’m very sad to say goodbye to him after 2 weeks cycling. 57 years old, mildly overweight and absolutely no training, to make it through the Rockies makes him a hero in my eyes. Well done Padre, may you forever continue to achieve the impossible. Now it’s on to Toronto for me…'
}
];

Blog
  .create(blogData)
  .then(result => {

    console.log(`created ${result.length} blogposts!`);
    mongoose.connection.close();
  });
