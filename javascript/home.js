// getting data from youTube api

let getData = async (q) => {

    
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${q}&key=AIzaSyA_uCt4o__GKdkAoQrfV3Mxo_ML19BnKOo`)

        let data = await res.json()

        console.log(data.items);
        return (data.items)
      

    }

    catch(err){
        console.log(err);
    }
}
  
 let videos_container = document.getElementById("videos_container");


 // append data function for landing page videos and debouncing

let appendData = (search_query, func) =>{

    let resultArr = getData(search_query)
    .then((res)=>{
        func(res);
    })

    .catch((err)=>{
        console.log(err);
    })
    
}


// appendData("coding", appendVideos)





// append Videos function for appending videos on landing page

function appendVideos(videos) {

    videos_container.innerHTML = null;

    videos.forEach((el) => {
        let videoId = el.id.videoId;
        let title = el.snippet.title;
        let channelTitle = el.snippet.channelTitle;
        console.log(channelTitle);

      let grid_items = document.createElement("div");
      grid_items.classList.add("items")

    
      console.log(videoId);

      grid_items.innerHTML = `<iframe width="265" height="180" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

      let discription = document.createElement("p");
      discription.innerText = title;
      grid_items.appendChild(discription)

   

      let channel_name = document.createElement("h4");
      channel_name.textContent = channelTitle
      

      grid_items.appendChild(channel_name)

   
      videos_container.append(grid_items)

    });


}




let search_query = document.getElementById("search_query");

let debounce_container = document.getElementById("debounce_container");


// debouncing function for appending results of search queries

let appendResults = (resArr)=>{
    debounce_container.style.display = "block"
    debounce_container.innerHTML = null;
    resArr.forEach(el => {
        let videoTitle = el.snippet.title;

        let videoId = el.id.videoId;

        let result_para = document.createElement("div");

        result_para.onclick = ()=>{
            goTovideos(videoTitle)
        }

        result_para.innerText = videoTitle;

        result_para.classList.add("result_para")

       

        debounce_container.appendChild(result_para);
     

    });
}


let timer;

let debounce = (func,delay)=>{

    clearTimeout(timer)

    timer = setTimeout( () =>{
        func()
    },delay)
    
 }

 let getResults = ()=>{
     let q = search_query.value;
     appendData(q, appendResults)
 }


 
const trigger = ()=> debounce(getResults, 2000);



function goTovideos(videoTitle){
    console.log(videoTitle);
}


// handling the style of debouncing container

let body = document.querySelector("body");

body.onclick = ()=>{
     let timer = setTimeout(()=>{
        gayab()
     },300)
 }

 gayab = ()=>{
    debounce_container.style.display = "none"
    search_query.value = " "
 }



 let search_btn = document.getElementById("search_btn");

 search_btn.onclick = ()=>{
     console.log(search_query.value);
 }

