
//API from Open weather, which is split using the URL and keycode so it does not stay one long link(needs to be broken up)
const openWeatherApi = "71e928d92d98bda0676099915e2ca191"
const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather"
const fiveDayForecastUrl = "https://api.openweathermap.org/data/2.5/forecast"
const fiveDayForecastApi = "71e928d92d98bda0676099915e2ca191"
// via mdn docs
//This will fetch all the data from the API, using cosnt variables that are placed. changed units to imperial.
//function will fetch location amd gather data
async function fetchWeather(location) {
    try {
        const responseWeather = await fetch(`${openWeatherUrl}?q=${location}&appid=${openWeatherApi}&units=imperial`)
        const dataWeather = await responseWeather.json()
        // console.log(data)
        console.log(dataWeather)
        return (dataWeather)
        //created catch error and if error occurs, console log will show message
    } catch (error) {
        console.log("There was an issues fetching data")
    }
}

async function fetchFiveDayWeather(location) {
    try {
        const responseFiveDay = await fetch(`${fiveDayForecastUrl}?q=${location}&appid=${fiveDayForecastApi}&cnt=35&units=imperial`)
        const dataFiveDay = await responseFiveDay.json()
        // console.log(data)
        console.log(dataFiveDay)
        return (dataFiveDay)
        //created catch error and if error occurs, console log will show message
    } catch (error) {
        console.log("There was an issues fetching data")
    }
}

function weatherInfoFiveDay(fiveDayOpenWeatherData) {

const {list} = fiveDayOpenWeatherData
    if (fiveDayOpenWeatherData) {
        const dayOne = list[0].dt_txt
        const dayOneTitle = document.createElement('h5')
        dayOneTitle.textContent = `Date: ${dayOne}`
        const dayOneSection = document.getElementById('day-one')
        dayOneSection.textContent = ''
        dayOneSection.appendChild(dayOneTitle);

        const dayOneTemp = list[0].main.temp
        const dayOneTempTitle = document.createElement('h5')
        dayOneTempTitle.textContent = `Date: ${dayOneTemp} F`
        const dayOneTempSection = document.getElementById('day-one-temp')
        dayOneTempSection.textContent = ''
        dayOneTempSection.appendChild(dayOneTempTitle);

        const dayTwo = list[8].dt_txt
        const dayTwoTitle = document.createElement('h5')
        dayTwoTitle.textContent = `Date: ${dayTwo}`
        const dayTwoSection = document.getElementById('day-two')
        dayTwoSection.textContent = ''
        dayTwoSection.appendChild(dayTwoTitle);

        const dayTwoTemp = list[8].main.temp
        const dayTwoTempTitle = document.createElement('h5')
        dayTwoTempTitle.textContent = `Date: ${dayTwoTemp} F`
        const dayTwoTempSection = document.getElementById('day-two-temp')
        dayTwoTempSection.textContent = ''
        dayTwoTempSection.appendChild(dayTwoTempTitle);

        const dayThree = list[16].dt_txt
        const dayThreeTitle = document.createElement('h5')
        dayThreeTitle.textContent = `Date: ${dayThree}`
        const dayThreeSection = document.getElementById('day-three')
        dayThreeSection.textContent = ''
        dayThreeSection.appendChild(dayThreeTitle);

        const dayThreeTemp = list[16].main.temp
        const dayThreeTempTitle = document.createElement('h5')
        dayThreeTempTitle.textContent = `Date: ${dayThreeTemp} F`
        const dayThreeTempSection = document.getElementById('day-three-temp')
        dayThreeTempSection.textContent = ''
        dayThreeTempSection.appendChild(dayThreeTempTitle);

        const dayFour = list[24].dt_txt
        const dayFourTitle = document.createElement('h5')
        dayFourTitle.textContent = `Date: ${dayFour}`
        const dayFourSection = document.getElementById('day-four')
        dayFourSection.textContent = ''
        dayFourSection.appendChild(dayFourTitle);

        const dayFourTemp = list[24].main.temp
        const dayFourTempTitle = document.createElement('h5')
        dayFourTempTitle.textContent = `Date: ${dayFourTemp} F`
        const dayFourTempSection = document.getElementById('day-four-temp')
        dayFourTempSection.textContent = ''
        dayFourTempSection.appendChild(dayFourTempTitle);

        const dayFive = list[32].dt_txt
        const dayFiveTitle = document.createElement('h5')
        dayFiveTitle.textContent = `Date: ${dayFive}`
        const dayFiveSection = document.getElementById('day-five')
        dayFiveSection.textContent = ''
        dayFiveSection.appendChild(dayFiveTitle);

        const dayFiveTemp = list[32].main.temp
        const dayFiveTempTitle = document.createElement('h5')
        dayFiveTempTitle.textContent = `Date: ${dayFiveTemp} F`
        const dayFiveTempSection = document.getElementById('day-five-temp')
        dayFiveTempSection.textContent = ''
        dayFiveTempSection.appendChild(dayFiveTempTitle);
    }
}


// function will show all of the weather information gathered from the API and then using the console.log,
// go into API and selected the needed information (name of city, main (for humidity), and wind)
function weatherInfo(openWeatherData) {
    // created one variable that will take in the three data points and created elements and appened them to page
// data will go into current city location and when user searches a new city it will be replaced with new city
const {name, main, wind } = openWeatherData
//data points from Open Weathers API

    if (openWeatherData) {
        //created elememt for page
        const locationTitle = document.createElement('h4')
        //added text to said created element, and in this case, name from Open Weather data and location.
        locationTitle.textContent = `Location: ${name}`
        //created variable to grab id that text and created element will be applied to
        const locationSection = document.getElementById('location-result')
        //this will clear text area when user refreshes the page or searches for new location
        locationSection.innerHTML = ''
        //created text from search will be put onto page in the ID section picked
        locationSection.appendChild(locationTitle);
        
        const temperature = main.temp
        const temperatureTitle = document.createElement('h5')
        temperatureTitle.textContent = `Temperature: ${temperature} F`
        const temperatureSection = document.getElementById('temp-result')
        temperatureSection.innerHTML = ''
        temperatureSection.appendChild(temperatureTitle);
        
        const humidity = main.humidity
        const humidityTitle = document.createElement('h5')
        humidityTitle.textContent = `Humidity: ${humidity} %`
        const humiditySection = document.getElementById('humidity-result')
        humiditySection.innerHTML = ''
        humiditySection.appendChild(humidityTitle);
        
        const windSpeed = wind.speed
        const windSpeedTitle = document.createElement('h5')
        windSpeedTitle.textContent = `Wind Speed: ${windSpeed} mph`
        const weatherSection = document.getElementById('wind-result')
        weatherSection.innerHTML = ''
        weatherSection.appendChild(windSpeedTitle)
}

}
const badRequestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=asdasda&appid=71e928d92d98bda0676099915e2ca191&units=imperial'
// const responseText = document.createElement('p')
// noLocation.textContent = `No location entered. Try Again.`
// const noLocationSection = document.getElementById('noLocation')
// noLocation.appendChild(noLocation)

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
    }
}
function searchWeatherFiveDay () {
    const locationTitle = document.getElementById('city')
    const location = locationTitle.value
    if (location.length > 0) {
        fetchFiveDayWeather(location)
            .then(weatherInfoFiveDay)
    }
}

//button starts function to get data from Open Weather
const searchButton = document.getElementById('searchBtn')
searchButton.addEventListener('click', searchWeather)
searchButton.addEventListener('click', searchWeatherFiveDay)



//! Starting 5 day forecast below



