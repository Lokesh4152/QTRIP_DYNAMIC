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
  const apiUrl =`https://qtrip-dynamic-nr4v.onrender.com/adventures/detail?adventure=${adventureId}`
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
  //console.log(adventure);
  
  const perPersonCost = document.getElementById("reservation-person-cost");
  perPersonCost.innerHTML=adventure.costPerHead;

  const IsAvailable = adventure.available;
  //console.log(IsAvailable);
  if(IsAvailable){
    const reservationDisplay =document.getElementById("reservation-panel-available");
    reservationDisplay.style.display = "block";

    const reservationSoldDisplay =document.getElementById("reservation-panel-sold-out");
    reservationSoldDisplay.style.display = "none";

    document.getElementById("reservation-person-cost").innerHTML=adventure.costPerHead;

  }else{

    const reservationDisplay =document.getElementById("reservation-panel-available");
    reservationDisplay.style.display = "none";

    const reservationSoldDisplay =document.getElementById("reservation-panel-sold-out");
    reservationSoldDisplay.style.display = "block";
    
  }
  

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  const costContainer = document.getElementById("reservation-cost");
  costContainer.innerHTML = adventure.costPerHead * persons;

  

  //console.log("perhead",adventure);

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
    const reservationForm = document.getElementById('myForm'); // Replace 'reservation-form' with the actual ID of your form
    
    // 2. Add an event listener for the form submission
    reservationForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      
      // const formData = new FormData(reservationForm);
      const formData = new FormData(document.getElementById('myForm'));

      // for (const [fieldName, fieldValue] of formData.entries()) {
      //   console.log(`Field Name: ${fieldName}, Field Value: ${fieldValue}`);
      // }

      // 4. Convert the form data to a JSON object
      const reservationData={};

      formData.forEach((value, key) => {
        reservationData[key] = value;
      });
      reservationData['adventure'] = adventure.id;
    

      
      // 5. Convert the JSON object to a JSON string
      const jsonData = JSON.stringify(reservationData);
      console.log(jsonData);
      
      // 6. Make a POST API call using fetch() to make the reservation
      try {
        const response = await fetch('https://qtrip-dynamic-nr4v.onrender.com/reservations/new', {
          method: 'POST',
          body: jsonData, // Send the JSON data as the request body
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        });
        
        if (response.ok) {
          // 7. If the reservation is successful, show an alert with "Success!" and refresh the page
          alert('Reservation successful!');
          window.location.reload(); // Refresh the page
        } else {
          // 8. If the reservation fails, show an alert with "Failed!"
          alert('Reservation failed!');
        }
      } catch (error) {
        console.error('Error making reservation:', error);
        // Handle errors, e.g., show an error message
        alert('An error occurred while making the reservation.');
      }
    });
  }
  

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
  if(adventure.reserved){
    const reservedBanner = document.getElementById("reserved-banner");
    reservedBanner.style.display="block";
  }else{
    const reservedBanner = document.getElementById("reserved-banner");
    reservedBanner.style.display="none";
  }

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
