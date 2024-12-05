let searchInp = document.getElementById("searchInp");
let btn = document.getElementById("btn");
let mainContainer = document.getElementById("mainContainer");
let nextBtn = document.getElementById("next");
let newSearch = document.getElementById("newSearch");
const accessKey = "KZzxwro_BHsa7k385LJ-u-bNu84XbkZXMNClXnK5384";
const url = "https://api.unsplash.com/search/photos?page=";
nextBtn.style.display = "none";
let loading = document.getElementById("loading");
loading.style.display = "none";
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  loading.style.display = "block";
  let pgValue = 1;
  nextBtn.style.display = "block";
  searchInp.style.display = "none";
  btn.style.display = "none";
  newSearch.style.display = "block";
  let query = searchInp.value;
  let data = await fetch(
    `${url}${pgValue}&query=${query}&client_id=${accessKey}`
  );
  let response = await data.json();
  console.log(response);
  loading.style.display = "none";
  for (let i = 0; i < 9; i++) {
    let src = response.results[i].urls.full;
    let img = document.createElement("img");
    img.classList.add("childs");
    img.setAttribute("src", src);
    mainContainer.append(img);
  }
  nextBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    pgValue = pgValue + 1;
    let query = searchInp.value;
    let data = await fetch(
      `${url}${pgValue}&query=${query}&client_id=${accessKey}`
    );
    let response = await data.json();
    console.log(response);
    for (let i = 0; i < 9; i++) {
      let src = response.results[i].urls.full;
      let img = document.createElement("img");
      img.classList.add("childs");
      img.setAttribute("src", src);
      mainContainer.append(img);
    }
  });
});
newSearch.addEventListener("click", () => {
  window.location.reload();
});
