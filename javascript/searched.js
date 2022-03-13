import Navbar from "../components/Navbar.js";

import getData from "./home.js";


let nav_container = document.getElementById("nav_container");

nav_container.innerHTML = Navbar();

let searched_history = JSON.parse(localStorage.getItem("searchHistory"));

console.log(searched_history);

let query = searched_history[searched_history.length-1].snippet.title;


console.log(query);

getData(query,appendItems )


 let videos_container = document.getElementById("videos_container")


function appendItems(videos){
    videos_container.innerHTML = null;


    videos.forEach((el)=>{
       let videoId = el.id.videoId;
    let title = el.snippet.title;
    let channelTitle = el.snippet.channelTitle;
    let publishTime = el.snippet.publishTime;
    console.log(el);
    let items = document.createElement("div");
    items.classList.add("items");

    let video_div = document.createElement("div");
    video_div.classList.add("video_div");


    video_div.innerHTML = `<iframe width="320" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;


    let description_div = document.createElement("div");
    description_div.classList.add("description_div")

    let vedeo_discription = document.createElement("h3");
    vedeo_discription.textContent = title;

    let posted_time = document.createElement('p');
    posted_time.textContent = `Published at : ${publishTime}`

    let channel_name = document.createElement('p');
    channel_name.textContent = channelTitle;
    channel_name.classList.add("em")

    description_div.appendChild(vedeo_discription);
    description_div.appendChild(posted_time);
    description_div.appendChild(channel_name);

    items.appendChild(video_div);
    items.appendChild(description_div);
    videos_container.appendChild(items)
    })
    

}



