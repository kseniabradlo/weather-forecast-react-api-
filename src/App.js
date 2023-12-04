import {useState, useEffect} from "react";
import './App.css';
import './index.css';

function App() {
  let[town,setTown]=useState(' ')
  let[data,setData]=useState({})

  const key = '96b01a1f2ccf430696217afa3bdbfd1a\n';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;
  function searchWeather(e){
    if(e.key === "Enter" && e.currentTarget.value != ''){
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
        setTown('');
    }
  }

  return (
      <div className="main">
         <div className="inp-field">
            <input onKeyDown={searchWeather} placeholder="enter location" type="text" value={town} onChange={(event) => setTown(event.currentTarget.value)}/>
         </div>

         <div className="response-wrapper">
             {data.name !== undefined &&(
                 <div className="response-div">
             <div className="city">{data.name}</div>
             <div className="temp">{data.main ? (<h1>{data.main.temp.toFixed()} °C</h1>):null}</div>
             <div>{data.main ? (<div className="feels-like"><p>feels like</p><h3>{data.main.feels_like.toFixed()} °C</h3></div>):null}</div>
             <div>{data.weather ? (<p>{data.weather[0].description} </p>):null}</div>
                 </div>
                     )}
         </div>

      </div>
  );
}

export default App;
