console.log("Weather App JavaScript connected!");

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherResult = document.getElementById("weatherResult");



searchButton.addEventListener("click", async function(){
    try {
        const city = cityInput.value.trim();
 

        if (city === "") {
    weatherResult.innerHTML = "Please enter a city.";
    return;
}


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
    throw new Error("Failed to fetch weather data");
}
    const data = await response.json();

const temperature = data.main.temp;
const humidity = data.main.humidity;
const condition = data.weather[0].description;
const windSpeed = data.wind.speed;

weatherResult.innerHTML = `
    ${city}
    Temperature: ${temperature}°C
    Humidity: ${humidity}%
    Condition: ${condition}
    Wind Speed: ${windSpeed} m/s
`;

console.log(data);
console.log(city);

    }
catch (error) {
    weatherResult.innerHTML = "City not found. Please enter a valid city.";
}



});

cityInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});


