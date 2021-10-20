//AIzaSyCXUjXRuJZ7uYBlGjAtuqFYUQz5ULz-CdY

//https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=popular&type=video&key=[YOUR_API_KEY] HTTP/1.1



// let getData = async () => {

//     try {
//         let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=popular&type=video&key=AIzaSyCXUjXRuJZ7uYBlGjAtuqFYUQz5ULz-CdY`)

//         let data = await res.json()

//         console.log(data);
//          appendVideos(data.items)

//     }

//     catch(err){
//         console.log(err);
//     }

// }

// getData()



// function appendVideos(videos) {

//     videos_container.innerHTML = null;

//     videos.forEach(({ id: { videoId } }) => {



//       let div = document.createElement("div");

//       console.log(videoId);

//       div.innerHTML = `<iframe width="150" height="150" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

//       div.style.marginTop = "20px"

//       videos_container.append(div)

//     });


// }


