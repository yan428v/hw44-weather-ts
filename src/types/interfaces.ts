export interface WeatherInfoProps {
    weatherInfo: {
        city: string,
        temp: number,
        pressure: number
    }
}

export interface WeatherFormProps {
    getWeather: (city:string) => void,
}