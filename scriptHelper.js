// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

}

function validateInput(testInput) {


    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(Number(testInput))) {
        return "Not a Number";
    }
    else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //console.log("form submission called");

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    }
    else if (validateInput(fuelLevel) === "Not a Number"
        || validateInput(cargoLevel) === "Not a Number"
        || validateInput(pilot) === "Is a Number"
        || validateInput(copilot) === "Is a Number") {
        alert("Plese enter Valid data!");
    }
    else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`;
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level is too low for the journey`;
            cargoStatus.innerHTML = `Cargo Mass is too much mass for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "#C7254E";
        }
        // check for fuel and cargo alone 
        else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = `Fuel level is too low for the journey`;
             cargoStatus.innerHTML = `Cargo Mass is low enough for launch.`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "#C7254E";
           
        }
        else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = `Fuel level is high enough for the journey`;
            cargoStatus.innerHTML = `Cargo Mass is too much mass for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "#C7254E";
            
        }

        else {
            fuelStatus.innerHTML = `Fuel level is high enough for the journey`;
            cargoStatus.innerHTML = `Cargo Mass is low enough for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle is ready to launch`;
            launchStatus.style.color = "#419F6A";

        }

    }

}







async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
