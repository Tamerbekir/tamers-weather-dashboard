//console logging the datat that is fetched from weatherAPI
async function logWeather() {
    let openWeather = "https://api.openweathermap.org/data/2.5/weather?q=peekskill,us&units=imperial&appid=71e928d92d98bda0676099915e2ca191"
    const response = await fetch(openWeather);
    const main = await response.json();
    console.log(main);
  }
  logWeather() 