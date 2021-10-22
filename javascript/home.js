//GET https://youtube.googleapis.com/youtube/v3/search?location=India&q=popular%20videos&type=video&key=[YOUR_API_KEY] HTTP/1.1

//https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&type=video&key




let getData = async () => {

    
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=popular%20videos&type=video&key=AIzaSyCXUjXRuJZ7uYBlGjAtuqFYUQz5ULz-CdY`)

        let data = await res.json()

        console.log(data.items.videoId);
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

    videos.forEach(({ id: { videoId } }) => {



      let div = document.createElement("div");

      console.log(videoId);

      div.innerHTML = `<iframe width="200" height="150" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

      div.style.marginTop = "20px"

      videos_container.append(div)

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

 

