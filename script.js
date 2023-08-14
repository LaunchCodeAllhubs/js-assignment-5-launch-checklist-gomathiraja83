// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("load event called");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       const planetPicked = pickPlanet(listedPlanets);
       console.log(planetPicked);
       addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, 
        planetPicked.distance, planetPicked.moons, planetPicked.image) ;
    })



    // Coding for Validate input and Mission Lauch Status.

   let list = document.getElementById("faultyItems");
   list.style.visibility ="hidden";
   let form = document.querySelector("form");
   
         form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoLevel = document.querySelector("input[name=cargoMass]");
            formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
           
         });
  
});