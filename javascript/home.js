import Navbar from "../components/Navbar.js";

let nav_container = document.getElementById("nav_container")

nav_container.innerHTML = Navbar();

// getting data from youTube api

let getData = async (q, func) => {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${q}&key=AIzaSyA_uCt4o__GKdkAoQrfV3Mxo_ML19BnKOo`
    );

    let data = await res.json();

     func(data.items)
  } catch (err) {
    console.log(err);
  }
};

getData("coding", appendVideos)

let videos_container = document.getElementById("videos_container");

// append data function for landing page videos and debouncing

// let appendData = (search_query, func) => {
//   let resultArr = getData(search_query)
//     .then((res) => {
//       func(res);
//     })

//     .catch((err) => {
//       console.log(err);
//     });
// };

// appendData("coding", appendVideos);

// append Videos function for appending videos on landing page

function appendVideos(videos) {
  videos_container.innerHTML = null;

  videos.forEach((el) => {
    let videoId = el.id.videoId;
    let title = el.snippet.title;
    let channelTitle = el.snippet.channelTitle;
    console.log(channelTitle);

    let grid_items = document.createElement("div");
    grid_items.classList.add("items");

    console.log(videoId);

    grid_items.innerHTML = `<iframe width="265" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    let discription = document.createElement("p");
    discription.innerText = title;
    grid_items.appendChild(discription);

    let channel_name = document.createElement("h4");
    channel_name.textContent = channelTitle;

    grid_items.appendChild(channel_name);

    videos_container.append(grid_items);
  });
}


export default getData;

