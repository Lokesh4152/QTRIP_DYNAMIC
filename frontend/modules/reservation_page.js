//import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them

  const apiUrl =`https://qtrip-dynamic-nr4v.onrender.com/reservations`
  try{
    const response =await fetch(apiUrl);
    if(!response.ok){
    throw new Error("Network response was not ok");
  }
    const reservation = await response.json();
    return reservation;
}catch(error){
    //console.error("Error fetching advntures:",error);
    return null;
}



  // Place holder for functionality to work in the Stubs
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  console.log(reservations);
  if(reservations.length > 0){
    const noReservationBanner = document.getElementById("no-reservation-banner");
    noReservationBanner.style.display = "none";
    
    const reservationTableParent = document.getElementById("reservation-table-parent");
    reservationTableParent.style.display = "block";

  const reservationTable = document.getElementById("reservation-table");

  // Loop through the reservations array and generate rows for each reservation
  for (let i = 0; i < reservations.length; i++) {
    const ele= reservations[i];

    // Create a new table row element
    const row = document.createElement("tr");
    
    //<a href="../pages/adventures/detail"></a>
    // Populate the row with reservation data
    
    let bookingDateformatted = new Date(ele.date).toJSON().slice(0, 10).split('-').reverse().map(part => parseInt(part)).join('/');


    let dateObject = new Date(ele.time);
    let formattedDate = dateObject.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    let formattedTime = dateObject.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    let finalFormattedString = `${formattedDate}, ${formattedTime}`;
    

    // Populate the row with reservation data
    row.innerHTML = `
        <td scope="col"><strong>${ele.id}</strong></td>
        <td scope="col">${ele.name}</td>
        <td scope="col">${ele.adventureName}</td>
        <td scope="col">${ele.person}</td>
        <td scope="col">${bookingDateformatted}</td>
        <td scope="col">${ele.price}</td>
        <td scope="col">${finalFormattedString}</td>
        <td scope="col" id="${ele.id}"><a href="../detail/?adventure=${ele.adventure}" ><button  class="reservation-visit-button">Visit Adventure</button></a></td>
    `;

   
    // Append the row to the table
    reservationTable.appendChild(row);
  }


}
else{
  const reservationTableParent = document.getElementById("reservation-table-parent");
 reservationTableParent.style.display = "none";

 const noReservationBanner = document.getElementById("no-reservation-banner");
 noReservationBanner.style.display = "block";

}

  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
