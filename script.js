/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
CityNameDiv = document.getElementById('city-name')
WeatherTypeDiv = document.getElementById('weather-type')
TempDiv = document.getElementById('temp')
MinTempDiv = document.getElementById('min-temp')
MaxTempDiv = document.getElementById('max-temp')

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */


getWeatherData = async(city) => { 
    const URL = "https://api.openweathermap.org/data/2.5/weather"; 
  //HINT: Use template literals to create a url with input and an API key
  data = await (await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)).json()
  tempMax = data.main.temp_max
  tempMin = data.main.temp_min
  temp = data.main.temp
  WeatherType = data.weather[0].main
  console.log(WeatherType,tempMax,tempMin,temp,city)
  showWeatherData(WeatherType,tempMax,tempMin,temp,city)  
  
} 
  


  //CODE GOES HERE


//getWeatherData("detroit").then(value => console.log(value))

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)

  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (Weathertype,tempMax,tempmin,temp,city) => {
  //CODE GOES HERE
    WeatherTypeDiv.innerText =  Weathertype
    TempDiv.innerText = temp
    MinTempDiv.innerText = tempmin 
    MaxTempDiv.innerText = tempMax
    CityNameDiv.innerText = city
  
}

