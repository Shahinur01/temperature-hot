const API_KEY=`4afeef331be85e96487d30157e0b9058`;

const searchTemperature=()=>{
    const searchInput=document.getElementById('searchInput');
    const searchText=searchInput.value;
    searchInput.value='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayWeather(data))
}
    // set function
 const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
 }

const displayWeather=(temperature)=>{
    console.log(temperature);
    setInnerText('city',temperature.name);
    setInnerText('weather',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);

    // icon set
    const url=` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconImages=document.getElementById('icon-img');
    iconImages.setAttribute('src',url);
}
// 