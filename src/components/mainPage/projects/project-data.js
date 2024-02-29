import pokedexImg from '../../../Images/pokedex-screenshot.jpg';
import redditImg from '../../../Images/reddit-lite-screenshot-wallpapers.jpg';
import jammmingImg from '../../../Images/jammming-screenshot.jpg';
import loginImg from '../../../Images/login-form-screenshot.jpg';
import dndImg from '../../../Images/dnd-site-screenshot.jpg';
import dukesImg from '../../../Images/dukes-suits.png';
import eshopImg1 from "../../../Images/eShop/eshop1.png"
import eshopImg2 from "../../../Images/eShop/eshop2.png"
import eshopImg3 from "../../../Images/eShop/eshop3.png"
import eshopImg4 from "../../../Images/eShop/eshop4.png"
import eshopImg5 from "../../../Images/eShop/eshop5.png"
import eshopImg6 from "../../../Images/eShop/eshop6.png"
import eshopImg7 from "../../../Images/eShop/eshop7.png"
import eshopImg8 from "../../../Images/eShop/eshop8.png"
import eshopImg9 from "../../../Images/eShop/eshop9.png"
import eshopImg10 from "../../../Images/eShop/eshop10.png"
import eshopImg11 from "../../../Images/eShop/eshop11.png"
import eshopImg12 from "../../../Images/eShop/eshop12.png"
import eshopImg13 from "../../../Images/eShop/eshop13.png"
import eshopImg14 from "../../../Images/eShop/eshop14.png"
import eshopImg15 from "../../../Images/eShop/eshop15.png"


export const projectsData = [
    {
        name: "Pokedex",
        id: 1,
        images: [pokedexImg],
        description: "An app built to show Pokemon and their stats when searched by either name or ID. The search fetches data from the Pokedex API and returns the name, type and abilities of the relevant Pokemon as well as an image of it. Performance was a key aspect of this project and the site achieved a Lighthouse score of 99 on desktop and 86 on mobile.",
        techUsed: "React, Redux, CSS, HTML, Pokemon API"
    },
    {
        name: "Reddit Lite",
        id: 2,
        images: [redditImg],
        description: "An app which links to the Reddit API and displays the top posts from the subreddit that has been searched for. Upvotes of a post can be seen, as well as how many comments there are on it. The links for 'See More' and 'Comments' will take the user to the relevant part of the post's page on the Reddit site. I tried to keep the visual appearance of the site as close to that of the official Reddit site as I could so that it would make sense to users.",
        techUsed: "React, Redux, CSS, HTML, Reddit json API"
    },
    {
        name: "Jammming",
        id: 3,
        images: [jammmingImg],
        description: "As one of the projects on my Codecademy course I made a React application which allows users to make playlists for Spotify. This project made use of the Spotify API to allow users to log in, search for an artist or song on the Spotify database, add tracks to a custom playlist and then add that playlist to their Spotify account. There was a lot of work put into linking up the site with the Spotify API and allowing users to log in.",
        techUsed: "React, CSS, HTML, Spotify API"
    },
    {
        name: "Login Form",
        id: 4,
        images: [loginImg],
        description: "This was a small project from a Udemy course that I did which was to create a Login screen in React which allows users to move between different sections with animated transitions. There are three pages: Login, Register and Reset which can be moved between seamlessly using the links and buttons. There is a functioning password reveal button and a password strength helper on the Register screen.",
        techUsed: "React, SASS, CSS, HTML"
    },
    {
        name: "East Grinstead DnD",
        id: 5,
        images: [dndImg],
        description: "One of my earlier projects, the aim was to create a site using HTML and CSS which is aesthetically pleasing and showcases my visual design skills. I wanted to make use of a large hero image which draws the user in and signifies the start of their adventure. I kept the design simple and used a very limited colour palette, picking purple to stand out against the green of the forest.",
        techUsed: "HTML, CSS"
    },
    {
        name: "Dukes",
        id: 6,
        images: [dukesImg],
        description: "My first attempt at creating an e-commerce site, this React project has a primary focus on visuals. I will be continuing the project to add in a search bar so that users can search for particular products and a login feature which will allow users to save products to their wishlist.",
        techUsed: "React, HTML, CSS"
    },
    {
        name: "eShop",
        id: 7,
        images: [eshopImg1, eshopImg2, eshopImg3, eshopImg4, eshopImg5, eshopImg6, eshopImg7, eshopImg8, eshopImg9, eshopImg10, eshopImg11, eshopImg12, eshopImg13, eshopImg14, eshopImg15],
        description: "An e-commerce site made to demonstrate and improve my understanding of Redux. The aim was to create a fully functioning website with an Admin area to manage adding and removing products as well as order status. The final project of a Udemy course that I took, this project has improved my knowledge of React and Redux as well as introducing me to the inclusion of Stripe and Firebase for payment, authorisation and storage. Fully responsive for desktop and mobile, this is the largest and most in-depth project that I have created so far in my career as a Developer.",
        techUsed: "React, Redux, HTML, SCSS, Stripe, Firebase, Node, Express"
    }
]