import image1 from './Images/pokedex-screenshot-top.4125d2bc.jpg';
import image2 from './Images/reddit-lite-screenshot-wallpapers.jpg';


export const projectsData = [
    {
        name: "Pokedex",
        id: 1,
        img: image1,
        description: "An app built to show Pokemon and their stats when searched by either name or id. The search fetches data from the Pokedex API and returns the name, type and abilities of the relevant Pokemon as well as an image of it. Performance was a key aspect of this project and the site achieved a Lighthouse score of 99 on desktop and 86 on mobile.",
        techUsed: "React, Redux, CSS, HTML, Pokemon API"
    },
    {
        name: "Reddit Lite",
        id: 2,
        img: image2,
        description: "An app which links to the Reddit API and displays the top posts from the subreddit that has been searched for. Upvotes of a post can be seen as well as how many comments there are on it. The links for 'See More' and 'Comments' will take the user to the relevant part of the post's page on the Reddit site. I tried to keep the visual appearance of the site as close to that of the official Reddit site as I could so that it would make sense to users.",
        techUsed: "React, Redux, CSS, HTML, Reddit json API"
    },
    {
        name: "Jammming",
        id: 3,
        img: "./Images/jammming-screenshot.jpg?raw=true",
        description: "As one of the projects on my Codecademy course i made a React application which allows users to make playlists for Spotify. This project made use of the Spotify API to allow users to log in, search for an artist or song on the Spotify database, add tracks to a custom playlist and then add that playlist to their Spotify account. There was a lot of work put into linking up the site with the Spotify API and allowing users to login.",
        techUsed: "React, CSS, HTML, Spotify API"
    },
    {
        name: "Login Form",
        id: 4,
        img: "./Images/login-form-screenshot.jpg",
        description: "This was a small project from a Udemy course that I did which was to create a Login screen in React which allows users to move between different sections with animated transitions. There are three pages: Login, Register and Reset which can be moved between seamlessly using the links and buttons. There is a functioning password reveal button and a password strength helper on the Register screen.",
        techUsed: "React, SASS, CSS, HTML"
    },
    {
        name: "East Grinstead DnD",
        id: 5,
        img: "./Images/dnd-site-screenshot.jpg",
        description: "One of my earlier projects, the aim was to create a site using HTML and CSS which is aesthetically pleasing and shows off my visual design skills.",
        techUsed: "HTML, CSS"
    }
]