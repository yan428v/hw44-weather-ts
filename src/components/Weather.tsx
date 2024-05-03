
import {WeatherInfoProps} from "../types/interfaces.ts";

const Weather = ({weatherInfo}:WeatherInfoProps) => {
    return (
        <div className={'infoWeath'}>
            <p>Location: {weatherInfo.city}</p>
            <p>Temp: {weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
        </div>
    );
};

export default Weather;