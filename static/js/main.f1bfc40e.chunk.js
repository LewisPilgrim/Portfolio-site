(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/portrait.8353534f.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/pokedex-screenshot-top.4125d2bc.jpg"},function(e,t,a){e.exports=a.p+"static/media/reddit-lite-screenshot-wallpapers.f6dd2f62.jpg"},,function(e,t,a){e.exports=a(39)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(7),l=a.n(o),r=(a(23),a(2)),c=(a(25),a(27),function(e){var t=e.enterSite;return i.a.createElement("header",null,i.a.createElement("h1",null,"Hi,",i.a.createElement("br",null)," I'm ",i.a.createElement("span",null,"Lewis Pilgrim")),i.a.createElement("h2",null,"Front-End Developer"),i.a.createElement("button",{className:"--btn",onClick:t,title:"Enter Site"},"Enter Site"))}),s=(a(29),a(4)),m=a(3),d=a(9),u=a(5),f=a(10),h=a(8),p=a.n(h),E=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("img",{src:p.a,alt:"Lewis",title:"Lewis"}),i.a.createElement("div",{className:"about-text"},i.a.createElement("h2",null,"About me"),i.a.createElement("p",null,"I am a Front-End Developer with a passion for problem solving and visual design and a keen eye for detail. I am new to the industry so my focus is on expanding my knowledge and maintaining industry best practice in order to achieve my goal of becoming an expert in the field of Front-End Development. Interactive design, Accessability and UX are key areas of interest for me and I love creating beautiful sites that everyone can enjoy!"),i.a.createElement("div",{className:"icons"},i.a.createElement(m.a,{color:"#2f4f4f",size:25,title:"HTML"}),i.a.createElement(d.a,{color:"#2f4f4f",size:25,title:"CSS"}),i.a.createElement(u.a,{color:"#2f4f4f",size:23,title:"JavaScript"}),i.a.createElement(s.a,{color:"#2f4f4f",size:27,title:"Git"}),i.a.createElement(s.b,{color:"#2f4f4f",size:25,title:"Node"}),i.a.createElement(f.a,{color:"#2f4f4f",size:25,title:"Figma"}),i.a.createElement(s.c,{color:"#2f4f4f",size:25,title:"React"}),i.a.createElement(u.b,{color:"#2f4f4f",size:25,title:"Redux"}))))},g=(a(31),function(e){var t=e.name,a=e.img,o=e.description,l=e.techUsed,c=Object(n.useState)(!0),s=Object(r.a)(c,2),m=s[0],d=s[1],u=function(){d(!m)};return i.a.createElement("div",null,!0===m?i.a.createElement("div",{className:"project-card",onClick:u},i.a.createElement("div",{className:"card-overlay"},i.a.createElement("img",{src:a,alt:t,width:"100%",title:t}))):i.a.createElement("div",{className:"project-popup"},i.a.createElement("h3",null,t),i.a.createElement("img",{src:a,alt:t,title:t}),i.a.createElement("p",null,o),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("span",null,"Tech Used"),": ",l),i.a.createElement("button",{className:"--btn",onClick:u,title:"Close"},"Close")))}),w=(a(33),a(11)),b=a.n(w),v=a(12),k=a.n(v),y=[{name:"Pokedex",id:1,img:b.a,description:"An app built to show Pokemon and their stats when searched by either name or id. The search fetches data from the Pokedex API and returns the name, type and abilities of the relevant Pokemon as well as an image of it. Performance was a key aspect of this project and the site achieved a Lighthouse score of 99 on desktop and 86 on mobile.",techUsed:"React, Redux, CSS, HTML, Pokemon API"},{name:"Reddit Lite",id:2,img:k.a,description:"An app which links to the Reddit API and displays the top posts from the subreddit that has been searched for. Upvotes of a post can be seen as well as how many comments there are on it. The links for 'See More' and 'Comments' will take the user to the relevant part of the post's page on the Reddit site. I tried to keep the visual appearance of the site as close to that of the official Reddit site as I could so that it would make sense to users.",techUsed:"React, Redux, CSS, HTML, Reddit json API"},{name:"Jammming",id:3,img:"./Images/jammming-screenshot.jpg?raw=true",description:"As one of the projects on my Codecademy course i made a React application which allows users to make playlists for Spotify. This project made use of the Spotify API to allow users to log in, search for an artist or song on the Spotify database, add tracks to a custom playlist and then add that playlist to their Spotify account. There was a lot of work put into linking up the site with the Spotify API and allowing users to login.",techUsed:"React, CSS, HTML, Spotify API"},{name:"Login Form",id:4,img:"./Images/login-form-screenshot.jpg",description:"This was a small project from a Udemy course that I did which was to create a Login screen in React which allows users to move between different sections with animated transitions. There are three pages: Login, Register and Reset which can be moved between seamlessly using the links and buttons. There is a functioning password reveal button and a password strength helper on the Register screen.",techUsed:"React, SASS, CSS, HTML"},{name:"East Grinstead DnD",id:5,img:"./Images/dnd-site-screenshot.jpg",description:"One of my earlier projects, the aim was to create a site using HTML and CSS which is aesthetically pleasing and shows off my visual design skills.",techUsed:"HTML, CSS"}],S=function(){var e=Object(n.useState)(y),t=Object(r.a)(e,1)[0];return i.a.createElement("div",{className:"project-list"},i.a.createElement("h2",null,"Projects"),i.a.createElement("p",null,"Here are some of the projects that I have made, click on them to find out more."),i.a.createElement("div",{className:"projects"},t.map(function(e){return i.a.createElement(g,{key:e.id,name:e.name,img:e.img,description:e.description,techUsed:e.techUsed})})))},j=(a(35),a(37),function(e){var t=e.scrollToAbout;return i.a.createElement("button",{className:"--btn see-more-btn",onClick:t,title:"More info"},"MORE INFO")}),I=function(e){var t=e.scrollToTop,a=Object(n.useState)(!1),o=Object(r.a)(a,2),l=o[0],c=o[1];return Object(n.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>100?c(!0):c(!1)})},[]),i.a.createElement("div",null,l&&i.a.createElement("button",{className:"btn-to-top",onClick:t,title:"Back to top"},"/\\"))},T=a(13),L=function(){var e=i.a.createRef(),t=i.a.createRef();return i.a.createElement("div",{className:"page-window",ref:t},i.a.createElement("div",{className:"project-section"},i.a.createElement(S,null),i.a.createElement(j,{scrollToAbout:function(){e.current.scrollIntoView({behavior:"smooth"})}}),i.a.createElement("hr",null)),i.a.createElement("div",{ref:e}),i.a.createElement(E,null),i.a.createElement("hr",null),i.a.createElement("div",{className:"contact"},i.a.createElement("h2",null,"Contact me"),i.a.createElement("span",null,i.a.createElement(T.a,{color:"#2f4f4f",size:19,title:"Email"}),i.a.createElement("h4",null,"lewis.pilgrim0@hotmail.co.uk")),i.a.createElement("span",null,i.a.createElement(m.c,{color:"#2f4f4f",size:19,title:"Phone"}),i.a.createElement("h4",null,"07975 888183")),i.a.createElement("span",null,i.a.createElement(m.b,{color:"#2f4f4f",size:19,title:"LinkedIn"}),i.a.createElement("h4",null,"https://www.linkedin.com/in/lewis-pilgrim-73ab08236/"))),i.a.createElement(I,{scrollToTop:function(){t.current.scrollIntoView({behavior:"smooth"})}}),i.a.createElement("footer",null,i.a.createElement("p",null,"Made by"," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/lewis-pilgrim-73ab08236/",title:"Lewis' LinkedIn"},"Lewis Pilgrim")," ","2023")))};var R=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],o=t[1];return i.a.createElement("div",{className:"App"},a?i.a.createElement(c,{enterSite:function(){return o(!1)}}):i.a.createElement(L,null))},C=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,40)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null))),C()}],[[14,3,2]]]);
//# sourceMappingURL=main.f1bfc40e.chunk.js.map