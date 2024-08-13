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
import pokedexVideo from '../../../Video/pokedex-video.mp4';
import loginVideo from '../../../Video/login-form-video.mp4';
import redditVideo from '../../../Video/reddit-lite-video.mp4';
import gandgquoteImg1 from "../../../Images/g&g-quote-portal/image001.webp"
import gandgquoteImg2 from "../../../Images/g&g-quote-portal/image002.webp"
import gandgquoteImg3 from "../../../Images/g&g-quote-portal/image007.webp"
import gandgquoteImg4 from "../../../Images/g&g-quote-portal/image008.webp"
import gandgquoteImg5 from "../../../Images/g&g-quote-portal/image009.webp"
import gandgquoteImg6 from "../../../Images/g&g-quote-portal/image010.webp"
import gandgquoteImg7 from "../../../Images/g&g-quote-portal/image011.webp"
import gandgquoteImg8 from "../../../Images/g&g-quote-portal/image012.webp"
import gandgquoteImg9 from "../../../Images/g&g-quote-portal/image013.webp"
import gandgquoteImg10 from "../../../Images/g&g-quote-portal/image014.webp"
import gandgquoteImg11 from "../../../Images/g&g-quote-portal/image015.webp"
import nourishImg1 from "../../../Images/nourish-fund/image01.png"
import nourishImg2 from "../../../Images/nourish-fund/image02.png"
import nourishImg3 from "../../../Images/nourish-fund/image03.png"
import nourishImg4 from "../../../Images/nourish-fund/image04.png"
import nourishImg5 from "../../../Images/nourish-fund/image05.png"
import nourishImg6 from "../../../Images/nourish-fund/image06.png"


export const projectsData = [
    {
        name: "G&G Quote portal",
        id: 1,
        images: [gandgquoteImg1, gandgquoteImg2, gandgquoteImg3, gandgquoteImg4, gandgquoteImg5, gandgquoteImg6, gandgquoteImg7, gandgquoteImg8, gandgquoteImg9, gandgquoteImg10, gandgquoteImg11],
        description: "A quote portal I am currently developing for my present company, a vitamin manufacturer. The portal is designed to allow brands to select the ingredients, packaging and quantity for bespoke supplements and get an immediate quote so that they can come to the sales staff as more informed, qualified leads. The project is entirely my responsibility, from design, to structure to building and deployment. The project is not yet live, but the functionality is complete and is my greatest development achievement to date. Users must create/login to an account to use the portal and their previously saved quotes are accessible by them so that they have a reference. I have implemented a full account creation, login and password recovery system, using nodemailer for recovery emails and bcrypt and tokens for security. Once logged in, users are able to search ingredients from the buyer database, and only ingredients that are currently able to be sold are shown. I achieved this by writing parameters which the database would be compared against when the ingredient database is first loaded. The page only shows the correct products. The dropdowns for the tub sizes and colours all work dynamically together as only some colours are avaialble in each size. Other colours can be seen in the dropdown, but only selected if they are available in the selected tub size. The prices are calculated by the app in real time, based on the selections that the user makes. Once the user has all of their desired selections they can click 'Save Quote' at the bottom of the form. This will save the quote to their profile in the database as well as sending an email to the sales team which contains all of the information that is required to proceed with the sales process. An example of the email can be seen in the final image. I have really enjoyed the challenge of this project and it is my first full stack project. Not only that, but it is a real-world commercial project and, while not yet deployed, my superiors are extremely pleased with what I have presented and are keen for it to be launched to the public. Problems I particularly enjoyed solving in this project have included 'cleaning' the data so that only the desired results are shown, discovering the need for nodemailer to set up the emailing part of the application, and ensuring that the application is secure enough to be released to the public. I am proud of what I have achieved and learnt from this project.",
        techUsed: "NextJs, Redux, Node, Mongodb, express, nodemailer, CSS, HTML"
    },
    {
        name: "Reddit Lite",
        id: 2,
        images: [redditImg, redditVideo],
        description: "An app which links to the Reddit API and displays the top posts from the subreddit that has been searched for. Upvotes of a post can be seen, as well as how many comments there are on it. The links for 'See More' and 'Comments' will take the user to the relevant part of the post's page on the Reddit site. I tried to keep the visual appearance of the site as close to that of the official Reddit site as I could so that it would make sense to users.",
        techUsed: "React, Redux, CSS, HTML, Reddit json API"
    },
    {
        name: "Nourish Fund",
        id: 3,
        images: [nourishImg1, nourishImg2, nourishImg3, nourishImg4, nourishImg5, nourishImg6],
        description: "A real world project created for a charity organisation which works with manufacturers and the charity Ripple Africa to raise money from B2B transactions for communities in Malawi. The site was fully designed and made by me at the request of the charity owners and has seen some success so far.",
        techUsed: "Squarespace, Zapier, CSS"
    },
    {
        name: "Login Form",
        id: 4,
        images: [loginImg, loginVideo],
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
    },
    {
        name: "Pokedex",
        id: 8,
        images: [pokedexImg, pokedexVideo],
        description: "An app built to show Pokemon and their stats when searched by either name or ID. The search fetches data from the Pokedex API and returns the name, type and abilities of the relevant Pokemon as well as an image of it. Performance was a key aspect of this project and the site achieved a Lighthouse score of 99 on desktop and 86 on mobile.",
        techUsed: "React, Redux, CSS, HTML, Pokemon API"
    },
    {
        name: "Jammming",
        id: 9,
        images: [jammmingImg],
        description: "As one of the projects on my Codecademy course I made a React application which allows users to make playlists for Spotify. This project made use of the Spotify API to allow users to log in, search for an artist or song on the Spotify database, add tracks to a custom playlist and then add that playlist to their Spotify account. There was a lot of work put into linking up the site with the Spotify API and allowing users to log in.",
        techUsed: "React, CSS, HTML, Spotify API"
    },
]