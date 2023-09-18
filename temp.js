const baseUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a57af21cfmsh7e8675758558987p147bf9jsn8c729b16b477",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const setLoading = (loading)=>{
    return loading
}

const getData = async (url, option) => {
    let loading = true;
    if (loading){
        loading= false
        window.alert("loading..")
    }
    if(loading == false){
        try {
            const response = await fetch(url, option);
            if(response.status== 200){

                const result = await response.json();
                
                temp.innerHTML = result.temp;
                feels_like.innerHTML = result.feels_like;
                humidity.innerHTML = result.humidity;
                min_temp.innerHTML = result.min_temp;
                max_temp.innerHTML = result.max_temp;
                wind_speed.innerHTML = result.wind_speed;
                wind_degrees.innerHTML = result.wind_degrees;
                sunrise.innerHTML = result.sunrise;
                sunset.innerHTML = result.sunset;
            }
            else{
                window.alert("internal server error")
            }
          
        } catch (error) {
          console.error(error);
        }
    }
   
  
};
const getWeather = (city) => {
  cityName.innerHTML = city;
 

      getData(`${baseUrl}city=${city}`, options);
  
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("lucknow");