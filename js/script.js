//key API http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=
//variaveis e seleçao de elementos
const apiKey = "bdd9b276a8c66b10ff78da8d6a6f0ba8";
const apiCountryURL ="https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data");
//funções
const getWeatherData = async (city) => {

  //busquei a temperatura
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  //https://api.openweathermap.org/data/3.0/onecall?
  const res= await fetch(apiWeatherURL);
  //transformei em string
  const data = await res.json();
  return data;
};

  const showWeatherData = async (city) => {
   const data = await getWeatherData(city);
   cityElement.innerText = data.name;
   tempElement.innerText = parseInt(data.main.temp);
   descElement.innerText = data.weather[0].description;
   weatherIconElement.setAttribute(
    "src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
   );
   countryElement.setAttribute("src", apiCountryURL + data.sys.country);
   humidityElement.innerText = `${data.main.humidity} %`;
   windElement.innerText = `${data.wind.speed}km/h`;

   weatherContainer.classList.remove("hide");
  };

//eventos
  searchBtn.addEventListener("click",(e) => {
  e.preventDefault();
  
  const city = cityInput.value;
  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if(e.code === "Enter"){
      const city = e.target.value;
      showWeatherData(city);

  }
});

//BZ4dk_Th-XT26pSBOASk_FUGRftOKNzL7GWp_I0tdm4
const keyUnsplash = "BZ4dk_Th-XT26pSBOASk_FUGRftOKNzL7GWp_I0tdm4";
