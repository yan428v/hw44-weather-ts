import {ChangeEvent, FormEvent, useState} from 'react';
import {WeatherFormProps} from "../types/interfaces.ts";



const Form = ({getWeather}: WeatherFormProps) => {
    const [city, setCity] = useState('');

   const getCity = (e: FormEvent) => {
       e.preventDefault();
       getWeather(city);
       setCity("");
   }

   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
       setCity(e.target.value);
   }

   return (
        <form onSubmit={getCity}>
            <input type={'text'} placeholder='City' value={city} onChange={handleChange}/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;