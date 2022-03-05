

let getData = async () => {

    
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=coding&key=AIzaSyA_uCt4o__GKdkAoQrfV3Mxo_ML19BnKOo`)

        let data = await res.json()

        console.log(data.items);
         appendVideos(data.items)

    }

    catch(err){
        console.log(err);
    }
}

getData()

let videos_container = document.getElementById("videos_container");




function appendVideos(videos) {

    videos_container.innerHTML = null;

    videos.forEach((el) => {
        let videoId = el.id.videoId;
        let title = el.snippet.title;
        let channelTitle = el.snippet.channelTitle;
        console.log(channelTitle);

      let grid_items = document.createElement("div");
      grid_items.classList.add("items")

    //   let video_div = document.createElement("div");
    //   video_div.classList.add("video_div");
    //   grid_items.appendChild(video_div);
    
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


 // going to sign in page 

 let login_btn = document.getElementById("login_btn");

 login_btn.onclick = () =>{
     goToSignInPage()
 }


//  function main(){
//      let query = document.getElementById("query").value;
     
//      searchVideo(query)


//  }

// fetching the data according to the input

searchVideos = async()=>{

    let query = document.getElementById("query").value;

    try{
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&type=video&key=AIzaSyCXUjXRuJZ7uYBlGjAtuqFYUQz5ULz-CdY`)

        let data = await res.json();

        console.log(data);

        appendVideos(data.items)
    }

    catch(err){
          console.log(err);
    }

 }
 

//   including debouncing in the search box
 let timer;

 let video_list_container = document.querySelector(".video_list_container");


 debounce = (func,delay)=>{

     video_list_container.style.display = "block"

    clearTimeout(timer)

    timer = setTimeout( () =>{
        func()
    },delay)
    
 }

 //adding event listener to the body for 

 let body = document.querySelector("body");


body.onclick = ()=>{
     let timeout = setTimeout(()=>{
        gayab()
     },1000)
 }

 gayab = ()=>{
    video_list_container.style.display = "none"
 }

 

