// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("load event called");
   /*let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })*/
   let list = document.getElementById("faultyItems");
   console.log(list);
   let form = document.querySelector("form");
   list.style.visibility = "visible";
         form.addEventListener("submit", function(event) {
            //event.preventDefault();
            console.log("submitt event called");
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoLevel = document.querySelector("input[name=cargoMass]");
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus")
            let cargoStatus = document.getElementById("cargoStatus");
            console.log("pilotstaus is:"+ pilotStatus);
           formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
           
         });
  
});