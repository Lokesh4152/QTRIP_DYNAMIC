//import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  //console.log(search);
  const params= new URLSearchParams(search);
  const adventureID = params.get('adventure');
  return adventureID;


  // Place holder for functionality to work in the Stubs
 // return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  //console.log(adventureId);
  //const apiUrl =`http://13.232.186.211:8082/adventures/detail?adventure=2447910730`
  const apiUrl =`http://127.0.0.1:8082/adventures/detail?adventure=${adventureId}`
  try{
    const response =await fetch(apiUrl);
    if(!response.ok){
    throw new Error("Network response was not ok");
  }
    const adventure = await response.json();
   // console.log(cities)
    return adventure;
}catch(error){
    //console.error("Error fetching advntures:",error);
    return null;
}

  

  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
 //console.log(adventure);
  //heading 
  const heading = document.getElementById("adventure-name");
  heading.innerHTML = adventure.name;
  //sub-heading
  const subTitle = document.getElementById("adventure-subtitle");
  subTitle.innerHTML=adventure.subtitle;

  //photo gallery
  adventure.images.forEach(image => {
    let container = document.createElement("div");
    container.className = "activity-card-image";
    container.innerHTML=`
    <img src =${image} alt="image1">
    `
   const photoDiv = document.getElementById("photo-gallery");

   photoDiv.appendChild(container);
  })
  //content section 
  const content = document.getElementById("adventure-content");
  //console.log(content);
  content.innerHTML= adventure.content;


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  function addBootstrapPhotoGallery(images) {
    const container = document.getElementById("photo-gallery");
    container.innerHTML = `
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <!-- Add indicators based on the number of images -->
          ${images.map((_, index) => `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''}></button>
          `).join('')}
        </div>
        <div class="carousel-inner">
          <!-- Add carousel items for each image -->
          ${images.map((imageUrl, index) => `
            <div class="activity-card carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${imageUrl}" class="d-block w-100" alt="image ${index + 1}">
            </div>
          `).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
  
  // Example usage
  const imageUrls = images.slice(0, (images.length));

  addBootstrapPhotoGallery(imageUrls);
  
//   const container= document.getElementById("photo-gallery");
//   container.innerHTML=`
//   <div id="carouselExampleIndicators" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="activity-card carousel-item active">
//       <img src=${images[0]} class="d-block w-100" alt="...">
//     </div>
//     <div class="activity-card carousel-item">
//       <img src=${images[1]} class="d-block w-100" alt="...">
//     </div>
//     <div class="activity-card carousel-item">
//       <img src=${images[2]} class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//   `

  

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
