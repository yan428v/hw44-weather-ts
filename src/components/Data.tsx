import {useState} from 'react';
import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {api_key, base_url} from "../utils/constants.tsx";
import {WeatherInfo} from "../types/interfaces.ts";


const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
    const getWeather = async (city:string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}`);
            const data = await response.json()
            console.log(data)

            if (data) {
                setWeatherInfo({
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure
                });
            } else {
                console.error('Не удалось получить все необходимые данные о погоде');
            }
        } catch (e: any) {
            console.error(e.message);
        }
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weatherInfo={weatherInfo}/>
        </div>
    );
};

export default Data;