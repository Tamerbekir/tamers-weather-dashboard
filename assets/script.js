//Get API key amd URL for Open Weather
//Add function for getting/fetching data
        //use console log to find each data point needed
                // data points. Temp, wind speed, humidity, location
//Create elements and append them to page for said data points
        //Maintain 5 day forcast for user
        //maintain search history for user
        //Create location storage for user 
//create throw/catch errors //?




//API from Open weather, which is split using the URL and keycode so it does not stay one long link(needs to be broken up)
const openWeatherApi = "71e928d92d98bda0676099915e2ca191"
const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather"

// via mdn docs
//This will fetch all the data from the API, using cosnt variables that are placed. changed units to imperial.
//function will fetch location amd gather data
async function fetchWeather(location) {
    try {
        const response = await fetch(`${openWeatherUrl}?q=${location}&appid=${openWeatherApi}&units=imperial`)
        const data = await response.json()
        return data
        //created catch error and if error occurs, console log will show message
    } catch (error) {
        console.log("There was an issues fetching data")
    }
    console.log(searchWeather)
}

//function will show all of the weather information gathered from the API and then using the console.log,
//go into API and selected the needed information (name of city, main (for humidity), and wind)
function weatherInfo(OpenWeatherData) {
    // const weatherInfoElement = document.getElementById('weather-info')

    // created one variable that will take in the three data points and created elements and appened them to page
    // will most likely change becasue elements will eventually append to classes instead of just randomly on the page
    if (OpenWeatherData) {
        const {name, main, wind } = OpenWeatherData
        
        const locationTitle = document.createElement('p');
        locationTitle.textContent = `Location: ${name}`
        document.body.appendChild(locationTitle);
        
        const temperature = main.temp;
        const temaptureTitle = document.createElement('p')
        temaptureTitle.textContent = `Temperature: ${temperature} F`
        document.body.appendChild(temaptureTitle)
        
        const humidity = main.humidity;
        const humidityTitle = document.createElement('p')
        humidityTitle.textContent = `Humidity: ${humidity} %`
        document.body.appendChild(humidityTitle);
        
        const windSpeed = wind.speed;
        const windSpeedTitle = document.createElement('p')
        windSpeedTitle.textContent = `Wind Speed: ${windSpeed} mph`
        document.body.appendChild(windSpeedTitle)
    }
}

//once the user clicks on the search button, this function will take into affect. It will gather the name that was
//typed into the search box (value) and fetch the infortmation from sad location and weather information from the API
//! for loop did not work here and crashed the page. Used regualr if statement instead. 
//If location.length > 0 then function will run. If user does not enter a city they will be alerted. 
//! Had message append to page instead of alert BUT it would not clear during next search by the user. Will fix.
function searchWeather () {
    const locationTitle = document.getElementById('city')
    const location = locationTitle.value
    if (location.length > 0) {
        fetchWeather(location)
            .then(weatherInfo)
    } else {
        alert("No location Entered!")
        }
    }

    //button starts function to get data from Open Weather
const searchButton = document.getElementById('searchBtn')
searchButton.addEventListener('click', searchWeather)



//! Starting 5 day forecast below







//! Will mostly like not use. Second way works better
// function getApi() {
//   const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.2901&lon=-73.9204&units=imperial&appid=71e928d92d98bda0676099915e2ca191';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for(let i = 0; i < data.length; i++){
//         console.log(data[i].temp)

//         const nameOfCity = document.createElement("h3")
//         nameOfCity.textContent = data[i].temp
//         weatherResults.append(nameOfCity)
//         console.log(requestUrl)
//       }
//     });
//   }
