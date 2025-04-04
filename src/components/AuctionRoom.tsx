import React, { useState ,   useEffect} from 'react';
import { Player, Team } from '../types';
import { Gavel } from 'lucide-react';

const INITIAL_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'MS Dhoni',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Wicket Keeper',
    image: 'https://i.cdn.newsbytesapp.com/images/l97220250303144126.jpeg'
  },
  {
    id: 2,
    name: 'Virat Kohli',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://cricketshop.co.za/wp-content/uploads/2021/04/VK-RCB.jpeg'
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://c.ndtvimg.com/2020-11/b8bkke5_rohit-sharma-ipl-trophy-bcciipl_625x300_11_November_20.jpg'
  },
  {
    id: 4,
    name: 'Hardik Pandya',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'AR',
    image: 'https://images.indianexpress.com/2024/03/HARDIK-PANDYA-MI-CAPTAIN.jpg'
  },
  {
    id: 5,
    name: 'Kieron Pollard',
    basePrice: 200,
    currentBid: 200,
    country: 'West Indies',
    role: 'AR',
    image: 'https://static.abplive.com/wp-content/uploads/2020/09/24134113/Pollard.jpg?impolicy=abp_cdn&imwidth=1200&height=675'
  },
  {
    id: 6,
    name: 'Suresh Raina',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/01/22/Pictures/_b4081f80-ff60-11e7-b2c1-a702bffbff45.jpg'
  },
  {
    id: 7,
    name: 'Jasprit Bumrah',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Bowler',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/jasprit-bumrah-will-be-available-to-feature-for-mumbai-indians-in-ipl-2024-pti-182102124-1x1.jpg?VersionId=wa9SnGSZG6DT5cQCsIc1oUHMXORkJh.b'
  },
  {
    id: 8,
    name: 'AB de Villiers',
    basePrice: 200,
    currentBid: 200,
    country: 'South Africa',
    role: 'Batsman',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfr9PDXscu21MWRJUhSBfeyiCfsnWdccd6w&s'
  },
  {
    id: 9,
    name: 'Chris Gayle',
    basePrice: 200,
    currentBid: 200,
    country: 'West Indies',
    role: 'Batsman',
    image: 'https://static.cricketaddictor.com/wp-content/uploads/2021/06/Chris-Gayle-4.jpg?q=80'
  },
  {
    id: 10,
    name: 'Lasith Malinga',
    basePrice: 200,
    currentBid: 200,
    country: 'Sri Lanka',
    role: 'Bowler',
    image: 'https://static.toiimg.com/thumb/msid-80368775,imgsize-73528,width-400,resizemode-4/80368775.jpg'
  },
  {
    id: 11,
    name: 'David Warner',
    basePrice: 200,
    currentBid: 200,
    country: 'Australia',
    role: 'Batsman',
    image: 'https://ss-i.thgim.com/public/cricket/article32647502.ece/alternates/FREE_1200/DAVID-WARNER'
  },
  {
    id: 12,
    name: 'Yuzvendra Chahal',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Bowler',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/yuzvendra-chahal-161319610-1x1_1.jpg?VersionId=Ni1q1jkHZGxa7EQXrNQ7w8HTOT.uCxbb'
  },
  {
    id: 13,
    name: 'Shubman Gill',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://dxn76xj9mnmqa.cloudfront.net/images/ipl-2024_dc-vs-gt_shubman.original.format-webp-lossless.webp'
  },
  {
    id: 14,
    name: 'Ruturaj Gaikwad',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1742035649820_RuturajGaikwadCSK.jpg?type=tq'
  },
  {
    id: 15,
    name: 'Suryakumar Yadav',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://static.cricbuzz.com/a/img/v1/i1/c196670/selectors-have-to-get-suryakumar-yadav-in-team-india-soon-simon-doull.jpg?d=high&p=det'
  },
  {
    id: 16,
    name: 'Travis Head',
    basePrice: 200,
    currentBid: 200,
    country: 'Australia',
    role: 'Batsman',
    image: 'https://static.toiimg.com/thumb/msid-109320411,width-1280,height-720,resizemode-4/109320411.jpg'
  },
  {
    id: 17,
    name: 'Sai Sudharsan',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://i0.wp.com/crictoday.com/wp-content/uploads/2023/03/B.-Sai-Sudharsan.jpg?ssl=1'
  },
  {
    id: 18,
    name: 'Manish Pandey',
    basePrice: 100,
    currentBid: 100,
    country: 'India',
    role: 'Batsman',
    image: 'https://media.crictracker.com/media/featureimage/2015/05/Manish-Pandey.jpg'
  },
  {
    id: 19,
    name: 'Shreyas Iyer',
    basePrice: 200,
    currentBid: 200,
    country: 'India',
    role: 'Batsman',
    image: 'https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/01/PBKS-Shreyas-Iyer-IPL-2025-Auction-1.webp'
  },
  {
    id: 20,
    name: 'Nitish Rana',
    basePrice: 100,
    currentBid: 100,
    country: 'India',
    role: 'Batsman',
    image: 'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTA0Mzk4YzEwLTRlODItMTFlZi1iMzFjLWM3ZTc5MGQ0OWM0MS5qcGc='
  },
  {
    id: 21,
    name: 'Rinku Singh',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://img.mensxp.com/media/content/2023/Apr/Rinku-Singh_6432cbce4a2cf.jpeg?w=900&h=1200&cc=1'
  },
  {
    id: 22,
    name: 'Tilak Varma',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://statico.sportskeeda.com/editor/2024/04/8ce31-17123465145391-1920.jpg'
  },
  {
    id: 23,
    name: 'Shikar Dhawan',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsman',
    image: 'https://images.news18.com/ibnlive/uploads/2022/04/pjimage-2022-04-17t202903.069.jpg'
  },
  {
    id: 24,
    name: 'Mayank Agarwal',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://www.iplcricketmatch.com/wp-content/uploads/2024/02/Mayank-Agarwal-IPL-Stats-Salary.jpg'
  },
  {
    id: 25,
    name: 'Faf du Plessis',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsman',
    image: 'https://static.toiimg.com/thumb/msid-90942017,width-1280,height-720,resizemode-4/90942017.jpg'
  },
  {
    id: 26,
    name: 'Dwayne Smith',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuYyGC6EbfoEwrFonpeeuiXM1hwC8QJbUnQ&s'
  },
  {
    id: 27,
    name: 'Jason Roy',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://circleofcricket.com/post_image/post_image_e433342.jpg'
  },
  {
    id: 28,
    name: 'Tim David',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://preview.redd.it/tim-david-has-faced-98-balls-at-wankhede-stadium-in-the-ipl-v0-kl71i8mah7xa1.jpg?width=640&crop=smart&auto=webp&s=932151f6d6685d9b01e5b3ae9f1a3cffab3280fb'
  },
  {
    id: 29,
    name: 'Shimron Hetmyer',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://statico.sportskeeda.com/editor/2023/04/15ca1-16817038613306-1920.jpg?w=640'
  },
  {
    id: 30,
    name: 'Steve Smith',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://s.ndtvimg.com/images/content/2016/apr/806/steven-smith-century-2904.jpg'
  },
  {
    id: 31,
    name: 'Kyle Mayers',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Kyle-Mayers.webp'
  },
  {
    id: 32,
    name: 'Venkatesh Iyer',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://files.prokerala.com/news/photos/imgs/1024/kkr-batter-venkatesh-iyer-walks-back-after-his-1560500.jpg'
  },
  {
    id: 33,
    name: 'Prithvi Shaw',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://images.moneycontrol.com/static-mcnews/2024/11/20241128093334_ipl-35.png?impolicy=website&width=770&height=431'
  },
  {
    id: 34,
    name: 'Jake Fraser',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1732454470218_JKF.jpg?type=tq'
  },
  {
    id: 35,
    name: 'Sharukh Khan',
    basePrice: 100,
    currentBid: 100,
    role: 'Batsman',
    image: 'https://images.moneycontrol.com/static-mcnews/2023/12/Shahrukh-Khan-has-played-for-Punjab-Kings-before-with-less-than-expected-success.-Photo-via-X-770x433.jpg?impolicy=website&width=770&height=431'
  },
  {
    id: 36,
    name: 'Ambati Rayudu',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsman',
    image: 'https://images.mykhel.com//webp/images/cricket/players/0/4620.jpg?v=5'
  },
  {
    id: 37,
    name: 'Robin Uthappa',
    basePrice: 200,
    currentBid: 200,
    role: 'Batsman',
    image: 'https://www.dailypioneer.com/uploads/2015/story/images/big/95733_robin.jpg'
  },
  {
    id: 38,
    name: 'Rishabh Pant',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 39,
    name: 'Ishan Kishan',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 40,
    name: 'KL Rahul',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 41,
    name: 'Sanju Samson',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 42,
    name: 'Dinesh Karthik',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 43,
    name: 'Heinrich Klaasen',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 44,
    name: 'Wriddhiman Saha',
    basePrice: 100,
    currentBid: 100,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 45,
    name: 'Phil Salt',
    basePrice: 100,
    currentBid: 100,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 46,
    name: 'Nicholas Pooran',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 47,
    name: 'Rahmanullah Gurbaz',
    basePrice: 100,
    currentBid: 100,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 48,
    name: 'Jonny Bairstow',
    basePrice: 100,
    currentBid: 100,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 49,
    name: 'Tristan Stubbs',
    basePrice: 100,
    currentBid: 100,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 50,
    name: 'Jos Buttler',
    basePrice: 200,
    currentBid: 200,
    role:'Wicket Keeper',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 51,
    name: 'Ravichandran Ashwin',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 52,
    name: 'Ravindra Jadeja',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 53,
    name: 'Axar Patel',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 54,
    name: 'Rahul Tewatia',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 55,
    name: 'Washington Sundar',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 56,
    name: 'Wanindu Hasaranga',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 57,
    name: 'Will Jacks',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 58,
    name: 'Marco Jansen',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 59,
    name: 'Krunal Pandya',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 60,
    name: 'Sunil Narine',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 61,
    name: 'Liam Livingstone',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 62,
    name: 'Andre Russell',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 63,
    name: 'Mitchell Santner',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 64,
    name: 'Moeen Ali',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 65,
    name: 'Mitchell Marsh',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 66,
    name: 'Deepak Hooda',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 67,
    name: 'Rashid Khan',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 68,
    name: 'Ben Stokes',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 69,
    name: 'Dwayne Bravo',
    basePrice: 200,
    currentBid: 200,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 70,
    name: 'Cameron Green',
    basePrice: 100,
    currentBid: 100,
    role: 'AR',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 71,
    name: 'Bhuvneshwar Kumar',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 72,
    name: 'Tushar Deshpande',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 73,
    name: 'Arshdeep Singh',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 74,
    name: 'Varun Chakravarthy',
    basePrice: 200,
    currentBid: 200,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 75,
    name: 'Mohammed Siraj',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 76,
    name: 'Mohit Sharma',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 77,
    name: 'Umesh Yadav',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 78,
    name: 'Jaydev Unadkat',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 79,
    name: 'Amit Mishra',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 80,
    name: 'Mukesh Kumar',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 81,
    name: 'Avesh Khan',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 82,
    name: 'Sai Kishore',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 83,
    name: 'Harshit Rana',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 84,
    name: 'Karn Sharma',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 85,
    name: 'Trent Boult',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 86,
    name: 'Maheesh Theekshana',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 87,
    name: 'Mustafizur Rahman',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 88,
    name: 'Mitchell Starc',
    basePrice: 200,
    currentBid: 200,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 89,
    name: 'Mujeeb Ur Rahman',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 90,
    name: 'Fazalhaq Farooqi',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 91,
    name: 'Naveen-ul-Haq',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 92,
    name: 'Mark Wood',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 93,
    name: 'Harpreet Singh',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 94,
    name: 'Lungi Ngidi',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 95,
    name: 'Anrich Nortje',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 96,
    name: 'Lockie Ferguson',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 97,
    name: 'Adam Zampa',
    basePrice: 100,
    currentBid: 100,
    role: 'Spin',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 98,
    name: 'Ishant Sharma',
    basePrice: 100,
    currentBid: 100,
    role: 'Pace',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&q=80&w=200'
  },
];

interface AuctionRoomProps {
  teams: Team[];
  updateTeams: (teams: Team[]) => void;
  currentPlayerIndex: number;
  updatePlayerIndex: (index: number) => void;
}

export default function AuctionRoom({ teams, updateTeams, currentPlayerIndex, updatePlayerIndex }: AuctionRoomProps) {
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [showSoldAnimation, setShowSoldAnimation] = useState(false);
  const [soldToTeam, setSoldToTeam] = useState<Team | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const currentPlayer = players[currentPlayerIndex];

  const increaseBid = () => {
    if (!currentPlayer) return;
    setPlayers(players.map((p, idx) => 
      idx === currentPlayerIndex 
        ? { ...p, currentBid: p.currentBid + 50 }
        : p
    ));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (showSoldAnimation) return;
    
    // Check for 'S' key for unsold
    if (e.key.toLowerCase() === 's') {
      markPlayerAsUnsold();
      return;
    }

    // Check for numeric keys (1-9)
    const numericKey = parseInt(e.key);
    if (!isNaN(numericKey)) {
      const team = teams.find(t => t.keyNumber === numericKey);
      processTeamSelection(team);
      return;
    }

    // Check for alphabetic keys (A-Z)
    const alphaKey = e.key.toUpperCase();
    if (/^[A-Z]$/.test(alphaKey)) {
      const team = teams.find(t => t.keyLetter?.toUpperCase() === alphaKey);
      processTeamSelection(team);
    }
  };

  const processTeamSelection = (team: Team | undefined) => {
    if (!team || !currentPlayer) return;

    if (team.budget < currentPlayer.currentBid) {
      alert(`${team.name} doesn't have enough budget!`);
      return;
    }

    setSoldToTeam(team);
    setStatusMessage(`Sold to ${team.name}!`);
    setShowSoldAnimation(true);

    const updatedTeams = teams.map(t =>
      t.id === team.id
        ? { ...t, budget: t.budget - currentPlayer.currentBid, players: [...t.players, { ...currentPlayer, soldTo: t.shortName }] }
        : t
    );

    const updatedPlayers = players.map((p, idx) => 
      idx === currentPlayerIndex ? { ...p, soldTo: team.shortName } : p
    );

    setTimeout(() => {
      updateTeams(updatedTeams);
      setPlayers(updatedPlayers);
      setShowSoldAnimation(false);
      setSoldToTeam(null);
      if (currentPlayerIndex < players.length - 1) {
        updatePlayerIndex(currentPlayerIndex + 1);
      }
    }, 2000);
  };

  const markPlayerAsUnsold = () => {
    if (!currentPlayer) return;
    
    setStatusMessage('Unsold!');
    setShowSoldAnimation(true);
    setSoldToTeam(null);

    const updatedPlayers = players.map((p, idx) => 
      idx === currentPlayerIndex ? { ...p, soldTo: 'Unsold' } : p
    );

    setTimeout(() => {
      setPlayers(updatedPlayers);
      setShowSoldAnimation(false);
      
      if (currentPlayerIndex < players.length - 1) {
        updatePlayerIndex(currentPlayerIndex + 1);
      }
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPlayerIndex, players, teams, showSoldAnimation]);

  if (!currentPlayer) return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Auction Complete!</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 relative border border-gray-300">
          {showSoldAnimation && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white text-3xl font-bold">
              {statusMessage}
            </div>
          )}
          <div className="text-center">
            <div className="w-48 h-64 mx-auto mb-4 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img 
                src={currentPlayer.image} 
                alt={currentPlayer.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{currentPlayer.name}</h1>
            <p className="text-lg text-gray-600">Base Price: ₹{currentPlayer.basePrice}L</p>
            <p className="text-lg text-green-600">Current Bid: ₹{currentPlayer.currentBid}L</p>
            <button 
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition-colors"
              onClick={increaseBid}
            >
              Increase Bid (+50L) <Gavel className="inline-block ml-2" />
            </button>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Team Shortcuts</h3>
            <div className="grid grid-cols-2 gap-3">
              {teams.map(team => (
                <div key={team.id} className="flex items-center p-2 hover:bg-gray-100 rounded">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg mr-3 border border-gray-400 font-medium bg-gray-200">
                    {team.keyNumber ?? team.keyLetter}
                  </span>
                  <span className="text-sm font-medium" style={{ color: team.color }}>
                    {team.shortName}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Press <span className="font-mono bg-gray-200 px-2 py-1 rounded">S</span> to mark player as Unsold
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}