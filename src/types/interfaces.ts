export interface WeatherInfo {
        city: string;
        temp: number;
        pressure: number;
}

export interface WeatherInfoProps {
    weatherInfo: WeatherInfo | null,
}


export interface WeatherFormProps {
    getWeather: (city:string) => void,
}