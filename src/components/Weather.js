import React from 'react';
import WeatherDay from './WeatherDay'

class Weather extends React.Component{
  

  render() {
    // console.log('weatherData', this.props.weatherData);
    let weatherData = this.props.weatherData.map((value, index) => 
    <WeatherDay key={index} value={value} />
    )
      
    

    return(
      <>
      {weatherData}
      </>
    )


    
  }
}



//{this.state.weatherData && 
//
//return (<li key={index}>{value.description}</li>)
//<ul>

// // {this.state.weatherData && this.state.weatherData.map((value, index) => {
  //   return (<li key={index}>{value.description}</li>);
  // })}
  // </ul>
  // //
  
  export default Weather;


