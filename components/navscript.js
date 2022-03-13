
import getData from "../javascript/home.js"


let search_query = document.getElementById("search_query");

let debounce_container = document.getElementById("debounce_container");

// debouncing function for appending results of search queries

let appendResults = (resArr) => {
  debounce_container.innerHTML = null;
  resArr.forEach((el) => {
    let videoTitle = el.snippet.title;

    let videoId = el.id.videoId;

    let result_para = document.createElement("div");

    result_para.onclick = () => {
      goTovideos(el);
    };

    result_para.innerText = videoTitle;

    result_para.classList.add("result_para");

    debounce_container.appendChild(result_para);
  });
};

let timer;

let debounce = (func, delay) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    func();
  }, delay);
};

let getResults = () => {
  let q = search_query.value;
  getData(q, appendResults)
};

let  trigger = () => {
  debounce_container.style.display = "block";
  debounce(getResults, 2000);
};

let search_input = document.getElementById("search_query")

search_input.onkeyup = ()=>{
  trigger()
}

let searched;

function goTovideos(videoDetails) {
  searched = videoDetails;

  if (localStorage.getItem("searchHistory") === null) {
    localStorage.setItem("searchHistory", JSON.stringify([]));
  }

  let arr = JSON.parse(localStorage.getItem("searchHistory"));

  arr.push(searched);

  localStorage.setItem("searchHistory", JSON.stringify(arr))
  
  window.location.href = "../html/searched.html";
}

// handling the style of debouncing container

let body = document.querySelector("body");

body.onclick = () => {
  let timer = setTimeout(() => {
    gayab();
  }, 300);
};

let gayab = () => {
  debounce_container.style.display = "none";
  search_query.value = " ";
};

let search_btn = document.getElementById("search_btn");

search_btn.onclick = () => {
  console.log(search_query.value);
};
