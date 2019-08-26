import React, {Component} from 'react';

import './App.css';
import Titles from '../components/Titles';
import WeatherForm from '../components/WeatherForm';
import Weather from '../components/Weather';
require('dotenv').config()

const API_KEY= process.env.REACT_APP_API_KEY


class App extends Component{
   
   state={
          temperature:'',
          humidity:'',
          weatherLists:[],
          city:'',
          country:'',
          description:'',
          error:''
   }
    


   getWeatherApi = async (e)=>{
      e.preventDefault();
      try{
          const city = e.target.elements.city.value;
          const country= e.target.elements.country.value;
          if(city && country){
              const resp = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
              const data = await resp.json()
               this.setState({
                temperature:data.main.temp,
                humidity: data.main.humidity,
                city:data.name,
                country:data.sys.country,
                description:data.weather[0].description,
                })   
              
                }else{

              this.setState({
                error:'Please enter the city and country'
              })

             }
            }catch(err){
              this.setState({error:'Please enter proper city and country'})
          } 
       }
  
   
   render(){
     return (
    <React.Fragment>
    <div>
      <header className="App-header">
        <h1>Weather App</h1>

      </header>
      <div className='main'>
       <div className='flex-wrapper'>
         
           <div className='column title-left'>
             <Titles />
           </div>
           <div className='column form-right'>

             <WeatherForm 
             getWeatherApi={this.getWeatherApi}
             />

             <Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                description={this.state.description}
                city={this.state.city}
                country={this.state.country}
                error={this.state.error}
              />
              </div>
         </div>
      </div>
    </div>
    </React.Fragment>
  );
}
   }
  

export default App;
