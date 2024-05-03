export interface WeatherInfoProps {
        city: string,
        temp: number,
        pressure: number
}
export type WeatherInfo = WeatherInfoProps | null;







export interface WeatherFormProps {
    getWeather: (city:string) => void,
}