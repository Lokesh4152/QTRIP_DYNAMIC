//import config from "../conf/index.js";

async function init() {
  // Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  // Updates the DOM with the cities
  if (cities) {
    displayCities(cities);
  }
}

async function fetchCities() {
  const apiUrl = "https://qtrip-dynamic-nr4v.onrender.com/cities";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const cities = await response.json();
    return cities;
  } catch (error) {
    //console.error("Error fetching cities:", error);
    return null;
  }
}

function displayCities(cities) {
  document.getElementById("data").innerHTML = ""; // Clear the current displayed cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

function filterCities(query, cities) {
  const filteredCities = cities.filter(city => city.city.toLowerCase().includes(query));
  displayCities(filteredCities);
}

function addCityToDOM(id, city, description, image) {
  let container = document.createElement("div");
  container.className = "col-md-3 col-sm-6 mb-4";
  let innerHTML = `
    <a href="./pages/adventures/?city=${id}" id="${id}" class="text-decoration-none">
    <div class="city-card bg-dark rounded overflow-hidden position-relative" id="${id}">
        <img src="${image}" alt="${city}" class="img-fluid w-100 img-fixed-height">
        <div class="position-absolute bottom-0 start-0 end-0 text-white text-center p-2 ">
            <h3 class="d-inline-block mb-0">${city}</h3> <div>${description}</div>
        </div>
    </div>
  </a>`;
  container.innerHTML = innerHTML;
  document.getElementById("data").appendChild(container);
}

export { init, fetchCities, addCityToDOM, filterCities };
