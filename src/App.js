import "./App.css";
import { useState } from "react";

const api = {
  key: "9fd288702c898e89c389cee994a75333",
  base: "https://api.openweathermap.org/data/2.5/",
};


function App() {

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month= months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month}`
  }
  

  const  [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{setWeather(result);
      setQuery('');
    console.log(result);});

    }
  }

  
  return (
    <div className="App">
      
        <div className="weatherBox">
          <form className="weatherSearch">
            <input
              type="text"
              className="inputWeather"
              placeholder="Search..."
              autofocus
            ></input>
            <button type="submit">Search</button>
          </form>

          <div className="infoContainer">
            <div className="infoContainer_left">
              <h1>Moscú, RU</h1>
              <span>Long -3.7026 </span>

              <span>Lat 40.4165</span>
              <p>10-10-2022</p>
              <p>Nubes</p>
            </div>

            <div className="infoContainer_right">
              <p>Temperature 30.24 ºC</p>
              <p>Feels like 30.24 ºC</p>
              <span>T min 20 </span>
              <span>T max 30</span>
              <p>Pressure 1016 hPa</p>
              <p>Humidity 65 %</p>

              <span>velocidad </span>
              <span>grados</span>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
