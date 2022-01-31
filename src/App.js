import "./App.css";

function App() {
  return (
    <div className="App">
      
        <div className="weatherBox">
          <form className="weatherSearch">
            <input
              type="text"
              className="inputWeather"
              placeholder="Search..."
            ></input>
            <button type="submit">Search</button>
          </form>

          <div className="infoContainer">
            <div className="infoContainer_left">
              <h1>Moscú, RU</h1>
              <span>Longitud -3.7026 </span>

              <span>Latitud 40.4165</span>
              <p>10-10-2022</p>
              <p>Nubes</p>
            </div>

            <div className="infoContainer_right">
              <p>Temperature 30.24 ºC</p>
              <p>Sensación térmica 30.24 ºC</p>
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
