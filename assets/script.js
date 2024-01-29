
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
        //taking weather for current day forecast
        const incomingWeather = await fetch(`${openWeatherUrl}?q=${location}&appid=${openWeatherApi}&units=imperial&date=`);
        const dataWeather = await incomingWeather.json();
        //once the weather is taken from API it is set into local storage
        localStorage.setItem('weatherData', JSON.stringify(dataWeather))
        console.log(dataWeather);
        //returns the data taken from API
        return dataWeather;
    } catch (error) {
        console.log("There was an issue fetching data");
    }
}

async function fetchFiveDayWeather(location) {
    try {
        //taking in weather for 5 day forcast
        const responseFiveDay = await fetch(`${fiveDayForecastUrl}?q=${location}&appid=${fiveDayForecastApi}&cnt=35&units=imperial`);
        const dataFiveDay = await responseFiveDay.json();
        //the five day weather is taken in and put into local storage
        localStorage.setItem('fiveDayWeatherData', JSON.stringify(dataFiveDay))
        console.log(dataFiveDay)
        //returns five day forcast information from API
        return dataFiveDay;
    } catch (error) {
        console.log("There was an issue fetching data")
    }
}

//this whole function graps data from the API points.
//the point of reference is LIST, then the date, the temp, wind and humidity is gathered.
function weatherInfoFiveDay(fiveDayOpenWeatherData) {
    const {list} = fiveDayOpenWeatherData

    //! need to add this to all variables that need a date


    if (fiveDayOpenWeatherData) {
        //created a variable for the data that is needed for the date
        const dayOneDay = new Date(list[0].dt_txt).toLocaleDateString('en-US')
        //formating time from API to read as month/day/year
        const dayOneFormattedDate = dayOneDay.split('/').join('/')
        //created element for the date
        const dayOneTitle = document.createElement('h6')
        //added text and information for the new date element, and grabbed variable 
        dayOneTitle.textContent = `Date: ${dayOneFormattedDate}`
        //grabbed ID in which I want to place said new created element with variable
        const dayOneSection = document.getElementById('day-one')
        //once the user searches for a new city, old text will clear out by using an empty string/text
        dayOneSection.textContent = ''
        //append created element and variable to the page
        dayOneSection.appendChild(dayOneTitle)

        //the same notes above apply to the rest of the elements here, exept data points were changed

        const dayOneTemp = list[0].main.temp
        const dayOneTempTitle = document.createElement('h6')
        dayOneTempTitle.textContent = `Temp: ${dayOneTemp} °F`
        const dayOneTempSection = document.getElementById('day-one-temp')
        dayOneTempSection.textContent = ''
        dayOneTempSection.appendChild(dayOneTempTitle);

        const dayOneWind = list[0].wind.speed
        const dayOneWindTitle = document.createElement('h6')
        dayOneWindTitle.textContent = `Wind: ${dayOneWind} mph`
        const dayOneWindSection = document.getElementById('day-one-wind')
        dayOneWindSection.textContent = ''
        dayOneWindSection.appendChild(dayOneWindTitle);

        const dayOneHumidity = list[0].main.humidity
        const dayOneHumidityTitle = document.createElement('h6')
        dayOneHumidityTitle.textContent = `Humidity: ${dayOneHumidity} %`
        const dayOneHumiditySection = document.getElementById('day-one-humidity')
        dayOneHumiditySection.textContent = ''
        dayOneHumiditySection.appendChild(dayOneHumidityTitle);


        const dayTwoDate = new Date(list[8].dt_txt).toLocaleDateString("en-us")
        const dayTwoFormattedDate = dayTwoDate.split('/').join('/')
        const dayTwoTitle = document.createElement('h6')
        dayTwoTitle.textContent = `Date: ${dayTwoFormattedDate}`
        const dayTwoSection = document.getElementById('day-two')
        dayTwoSection.textContent = ''
        dayTwoSection.appendChild(dayTwoTitle);

        const dayTwoTemp = list[8].main.temp
        const dayTwoTempTitle = document.createElement('h6')
        dayTwoTempTitle.textContent = `Temp: ${dayTwoTemp} °F`
        const dayTwoTempSection = document.getElementById('day-two-temp')
        dayTwoTempSection.textContent = ''
        dayTwoTempSection.appendChild(dayTwoTempTitle);

        const dayTwoWind = list[8].wind.speed
        const dayTwoWindTitle = document.createElement('h6')
        dayTwoWindTitle.textContent = `Wind: ${dayTwoWind} mph`
        const dayTwoWindSection = document.getElementById('day-two-wind')
        dayTwoWindSection.textContent = ''
        dayTwoWindSection.appendChild(dayTwoWindTitle);

        const dayTwoHumidity = list[8].main.humidity
        const dayTwoHumidityTitle = document.createElement('h6')
        dayTwoHumidityTitle.textContent = `Humidity: ${dayTwoHumidity} %`
        const dayTwoHumiditySection = document.getElementById('day-two-humidity')
        dayTwoHumiditySection.textContent = ''
        dayTwoHumiditySection.appendChild(dayTwoHumidityTitle)


        const dayThreeDate = new Date(list[8].dt_txt).toLocaleDateString("en-us")
        const dayThreeFormattedDate = dayThreeDate.split('/').join('/')
        const dayThreeTitle = document.createElement('h6')
        dayThreeTitle.textContent = `Date: ${dayThreeFormattedDate}`
        const dayThreeSection = document.getElementById('day-three')
        dayThreeSection.textContent = ''
        dayThreeSection.appendChild(dayThreeTitle);

        const dayThreeTemp = list[16].main.temp
        const dayThreeTempTitle = document.createElement('h6')
        dayThreeTempTitle.textContent = `Temp: ${dayThreeTemp} °F`
        const dayThreeTempSection = document.getElementById('day-three-temp')
        dayThreeTempSection.textContent = ''
        dayThreeTempSection.appendChild(dayThreeTempTitle);

        const dayThreeWind = list[16].wind.speed
        const dayThreeWindTitle = document.createElement('h6')
        dayThreeWindTitle.textContent = `Wind: ${dayThreeWind} mph`
        const dayThreeWindSection = document.getElementById('day-three-wind')
        dayThreeWindSection.textContent = ''
        dayThreeWindSection.appendChild(dayThreeWindTitle);

        const dayThreeHumidity = list[16].main.humidity
        const dayThreeHumidityTitle = document.createElement('h6')
        dayThreeHumidityTitle.textContent = `Humidity: ${dayThreeHumidity} %`
        const dayThreeHumiditySection = document.getElementById('day-three-humidity')
        dayThreeHumiditySection.textContent = ''
        dayThreeHumiditySection.appendChild(dayThreeHumidityTitle);

        const dayFourDate = new Date(list[24].dt_txt).toLocaleDateString("en-us")
        const dayForFormattedDate = dayFourDate.split('/').join('/')
        const dayFourTitle = document.createElement('h6')
        dayFourTitle.textContent = `Date: ${dayForFormattedDate}`
        const dayFourSection = document.getElementById('day-four')
        dayFourSection.textContent = ''
        dayFourSection.appendChild(dayFourTitle);

        const dayFourTemp = list[24].main.temp
        const dayFourTempTitle = document.createElement('h6')
        dayFourTempTitle.textContent = `Temp: ${dayFourTemp} °F`
        const dayFourTempSection = document.getElementById('day-four-temp')
        dayFourTempSection.textContent = ''
        dayFourTempSection.appendChild(dayFourTempTitle)

        const dayFourWind = list[24].wind.speed
        const dayFourWindTitle = document.createElement('h6')
        dayFourWindTitle.textContent = `Wind: ${dayFourWind} mph`
        const dayFourWindSection = document.getElementById('day-four-wind')
        dayFourWindSection.textContent = ''
        dayFourWindSection.appendChild(dayFourWindTitle)

        const dayFourHumidity = list[24].main.humidity
        const dayFourHumidityTitle = document.createElement('h6')
        dayFourHumidityTitle.textContent = `Humidity: ${dayFourHumidity} %`
        const dayFourHumiditySection = document.getElementById('day-four-humidity')
        dayFourHumiditySection.textContent = ''
        dayFourHumiditySection.appendChild(dayFourHumidityTitle);


        const dayFiveDate = new Date(list[32].dt_txt).toLocaleDateString("en-us")
        const dayFiveFormattedDate = dayFiveDate.split('/').join('/')
        const dayFiveTitle = document.createElement('h6')
        dayFiveTitle.textContent = `Date: ${dayFiveFormattedDate}`
        const dayFiveSection = document.getElementById('day-five')
        dayFiveSection.textContent = ''
        dayFiveSection.appendChild(dayFiveTitle);

        const dayFiveTemp = list[32].main.temp
        const dayFiveTempTitle = document.createElement('h6')
        dayFiveTempTitle.textContent = `Temp: ${dayFiveTemp} °F`
        const dayFiveTempSection = document.getElementById('day-five-temp')
        dayFiveTempSection.textContent = ''
        dayFiveTempSection.appendChild(dayFiveTempTitle);

        const dayFiveWind = list[32].wind.speed
        const dayFiveWindTitle = document.createElement('h6')
        dayFiveWindTitle.textContent = `Wind: ${dayFiveWind} mph`
        const dayFiveWindSection = document.getElementById('day-five-wind')
        dayFiveWindSection.textContent = ''
        dayFiveWindSection.appendChild(dayFiveWindTitle)

        const dayFiveHumidity = list[32].main.humidity
        const dayFiveHumidityTitle = document.createElement('h6')
        dayFiveHumidityTitle.textContent = `Humidity: ${dayFiveHumidity} %`
        const dayFiveHumiditySection = document.getElementById('day-five-humidity')
        dayFiveHumiditySection.textContent = ''
        dayFiveHumiditySection.appendChild(dayFiveHumidityTitle)
    }
}

//function/click event that refreshes the page for the user so they can see their search results
document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
})

//this function takes data for the current forcast using data points from API- name, main and wind
//same notes for fivedayweather apply here.
function weatherInfo(openWeatherData) {
    const {name, main, wind} = openWeatherData;

    if (openWeatherData) {
        const locationTitle = document.createElement('h4')
        locationTitle.textContent = `Location: ${name}`
        const locationSection = document.getElementById('location-result')
        locationSection.innerHTML = ''
        locationSection.appendChild(locationTitle);

        const temperature = main.temp
        const temperatureTitle = document.createElement('h5')
        temperatureTitle.textContent = `Temperature: ${temperature} °F`
        const temperatureSection = document.getElementById('temp-result')
        temperatureSection.innerHTML = ''
        temperatureSection.appendChild(temperatureTitle)

        const humidity = main.humidity
        const humidityTitle = document.createElement('h5')
        humidityTitle.textContent = `Humidity: ${humidity} %`
        const humiditySection = document.getElementById('humidity-result')
        humiditySection.innerHTML = ''
        humiditySection.appendChild(humidityTitle)

        const windSpeed = wind.speed
        const windSpeedTitle = document.createElement('h5')
        windSpeedTitle.textContent = `Wind Speed: ${windSpeed} mph`
        const weatherSection = document.getElementById('wind-result')
        weatherSection.innerHTML = ''
        weatherSection.appendChild(windSpeedTitle)
    }
}

//this empty arry is used to store all the search history from the user
const searchHistory = []

//this fucnton is putting the search history and appending it to the page from the local storage
function getStoredSearchHistory() {
    //variable for getting the local storage
    const storedSearchHistory = localStorage.getItem('searchHistory')
    if (storedSearchHistory) {
    //parses the search history into localstorage
    searchHistory.push(...JSON.parse(storedSearchHistory))
    for (const location of searchHistory) {
        createHistoryButton(location)
        }
    }
}

//these variables, along with this function creates a button that gathers ALL of the 
//data gathered from the API and their location, and in this case, it is from the 
//current and five day weather. A button is created via elements such as button and list and then said button/list is appened to the page
function createHistoryButton(location) {
    //variable to create element for button that displays as searched city
    const historyButton = document.createElement('button')
    historyButton.textContent = location
    //when user clicks on button, gather data from current and five day weather locations
    historyButton.addEventListener('click', function () {
        fetchWeather(location).then(weatherInfo);
        fetchFiveDayWeather(location).then(weatherInfoFiveDay);
    })
    //variable to create list element for new history button
    //! appends only when page is refreshed
    const historyItem = document.createElement('li')
    //append history button on to page in list order
    historyItem.appendChild(historyButton)
    //getting ID for where list will go 
    const searchHistorySection = document.getElementById('search-history')
    // use this id to append the new element created list
    searchHistorySection.appendChild(historyItem)
}




// this function will update the search history in localstorage by taking all the search history 
//results typed into search text field. Every time a user searches a location it will go to storage and not replace already stored location searched
function updateSearchHistory(location) {
    if (!searchHistory.includes(location)) {
        searchHistory.push(location)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    }
}

//variable for search button. when user clicks it, it searchs within the api for both 
//fivedayweather and current weather 
const searchButton = document.getElementById('searchBtn')
searchButton.addEventListener('click', searchWeatherCombined)

//this fucntion is a combined function for  the fiveday weather and current weather. 
//it also makes its easy to plug this function into other functions because it is now one combined
function searchWeatherCombined() {
    const locationTitle = document.getElementById('city')
    const location = locationTitle.value;
    if (location.length > 0) {
        fetchWeather(location).then(weatherInfo)
        fetchFiveDayWeather(location).then(weatherInfoFiveDay)
        updateSearchHistory(location)
    }
}

//calls the function to take displayed locations and put them into location storage
getStoredSearchHistory()