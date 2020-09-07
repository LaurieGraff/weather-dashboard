var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#location");
var locationContainerEl = document.querySelector("#location-container");
var locationSearchTerm = document.querySelector("#location-search-term");


var openWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=291eb64fcf4f9e5e8117ac76b4c30e22";

    fetch(apiUrl)
    .then(function(response) {
       return response.json();
    })
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    var location = cityInputEl.value.trim();

    if(location) {
        openWeather(location);
        cityInputEl.value = ""
    } else {
        alert("Please enter a valid city name");
    }
    console.log(event);
};

var displayWeather = function(response) {

    

    locationContainerEl.textContent = "";
  
    var currentCity = response.name;

    var displayEl = document.createElement("div");

    var cityEl = document.createElement("span");
    cityEl.textContent = currentCity;

    displayEl.appendChild(cityEl);

    locationContainerEl.appendChild(displayEl)
    //displayEl.classlist = "list-item flex-row justify-space-between align-center";

   // var cityEl = document.createElement("span");
   // cityEl.classlist = location;

    
    console.log(city);
    console.log(searchTerm);
};

searchFormEl.addEventListener("submit", formSubmitHandler)
