import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Chennai",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        feelslike: 29.84,
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{ backgroundColor: "wheat" }}>
            <h2 style={{ textAlign: "center" }}>Weather APP</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}