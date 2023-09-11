//import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  //console.log("From init()");

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
//   TODO: MODULE_CITIES
//   1. Fetch cities using the Backend API and return the data
//    use await with fetch()
//   put the returned data into the variable
//   return this variable
//  http://13.233.196.243:8082/cities
// ../../backend/db.json


  const apiUrl = "https://qtrip-dynamic-nr4v.onrender.com/cities";
  try{
    const response =await fetch(apiUrl);
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    const cities = await response.json();
    return cities;
  }catch(error){
    //console.error("Error fetching cities:",error);
    return null;
  }
  // let cities=[{
  //   "id": "bengaluru",
  //   "city": "Bengaluru",
  //   "description": "100+ Places",
  //   "image": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  // }];
  // return cities;
  
  // const cities = await response.json();
  // return cities;

}


//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let container =document.createElement("div");
  container.className="col-md-3 col-sm-6 mb-4";
  let innerHTML=`
  <a href="./pages/adventures/?city=${id}" id="${id}" class="text-decoration-none">
  <div class="city-card bg-dark rounded overflow-hidden position-relative" id="${id}">
      <img src="${image}" alt="${city}" class="img-fluid w-100 img-fixed-height">
      <div class="position-absolute bottom-0 start-0 end-0 text-white text-center p-2 ">
          <h3 class="d-inline-block mb-0">${city}</h3> <div>${description}</div>
      </div>
  </div>
</a>
`
// let innerHTML=`<p>${city}</p> <img src="${image}" class="img-fluid>`
container.innerHTML=innerHTML;
document.getElementById("data").appendChild(container);
}

export { init, fetchCities, addCityToDOM };
