
import {WeatherInfo, WeatherInfoProps} from "../types/interfaces.ts";
import {FC} from "react";

const Weather:FC<WeatherInfoProps> = ({weatherInfo}:WeatherInfo) => {
    if (!weatherInfo) {
        return <div>Загрузка данных о погоде...</div>;
    }

    return (
        <div className={'infoWeath'}>
            <p>Location: {weatherInfo.city}</p>
            <p>Temp: {weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
        </div>
    );
};

export default Weather;