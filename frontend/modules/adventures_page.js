
//import { filter } from "lodash";
//import config from "../conf/index.js";
//import { divide } from "lodash";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  const params= new URLSearchParams(search);
  const cityID = params.get('city');
  return cityID;


}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  const apiUrl=`http://127.0.0.1:8082/adventures?city=${city}`
  try{
      const response =await fetch(apiUrl);
      if(!response.ok){
      throw new Error("Network response was not ok");
    }
      const cities = await response.json();
     // console.log(cities)
      return cities;
  }catch(error){
      //console.error("Error fetching cities:",error);
      return null;
  }

}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  //console.log(adventures)
    adventures.forEach((adventure) => {
      let container = document.createElement("div");
      container.className="col-6 col-lg-3 mb-3";
        let innerHTML=`
      <a href="detail/?adventure=${adventure.id}" id ="${adventure.id}">
        <div class="activity-card">
        <div class="banner">
        <span class="banner-text">${adventure.category}</span>
        </div>
          <img src="${adventure.image}" class="activity-card-image" alt="${adventure.name}">
          <div class="card-body  text-center d-md-flex justify-content-between">
            <h5 class="card-title">${adventure.name}</h5>
            <p class="card-text">₹${adventure.costPerHead}</p>
          </div>
          <div class="card-body  text-center d-md-flex justify-content-between mt-n1">
            <h5 class="card-title">Duration</h5>
            <p class="card-text">${adventure.duration}</p>
          </div>
          </div>
      </a>
      </div>
      `
      container.innerHTML=innerHTML;
      document.getElementById("data").appendChild(container);
      
    });
  
  
  
  // ----Trid to add new adventure button------------
  // document.getElementById("addAdventureButton").addEventListener("click", async () => {
  //   try {
  //     const response = await fetch("/adventures/new", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ cityId: "3727396712" }), // Replace with the actual city ID
  //     });
  
  //     if (response.ok) {
  //       // Adventure added successfully, you can refresh the page to see the new adventure
  //       location.reload();
  //     } else {
  //       console.error("Failed to add new adventure");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // });
  


}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  console.log(list,"original list",low,high);
  const filteredList= list.filter(adventure => adventure.duration >= low && adventure.duration <= high);
  //console.log(filteredList);
  return filteredList;

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  return list.filter(adventure => categoryList.includes(adventure.category))
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  //1.filter by duration 
  let filteredList = [];

  // 3. Filter by duration and category together
  if (filters["duration"].length > 0 && filters["category"].length > 0) {
    let choice = filters["duration"].split("-");
    filteredList = filterByDuration(
      list,
      parseInt(choice[0]),
      parseInt(choice[1])
    );
    filteredList = filterByCategory(filteredList, filters["category"]);
  }

  // 2. Filter by duration only
  else if (filters["duration"].length > 0) {
    let choice = filters["duration"].split("-");
    filteredList = filterByDuration(
      list,
      parseInt(choice[0]),
      parseInt(choice[1])
    );
  }

  // 1. Filter by category only
  else if (filters["category"].length > 0) {
    filteredList = filterByCategory(list, filters["category"]);
  }

  // default case when there is no filter
  else {
    filteredList = list;
  }
  return filteredList;

 
}

function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  localStorage.setItem("filters", JSON.stringify(filters));
  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  

  return JSON.parse(localStorage.getItem("filters"));
}


//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
  // Update duration filter value
  //console.log(filters)
  const categories = filters.category;
  
  // Generate category filter pills
  //console.log("it is executing");
  categories.forEach((key) => {
    const pillElement = document.createElement("div");
    pillElement.className = "category-filter";
    pillElement.innerHTML =`<div>${key}</div>` ;

    document.getElementById("category-list").appendChild(pillElement);
  });

  // Update the DOM with filtered adventures
  // const filteredAdventures = filterFunction(allAdventures, filters);
  // addAdventureToDOM(filteredAdventures);

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
