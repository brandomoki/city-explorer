import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Weather from './components/Weather'
import Movie from './components/Movie'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      longitude: '-115.172',
      lattitude: ' 36.114',
      weatherData: [],
      error: false,
      errorMessage: '',
      movieData: [],
      showWeather: true,
      
      
      



    }
   
  }



  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  getMovieData = async (e) => {
    try{
      let movieUrl = `${process.env.REACT_APP_SERVER}/movie?city=${this.state.city}`;
      console.log('this.state.city', this.state.city);

      

      let movieData = await axios.get(movieUrl);
      this.setState({movieData: movieData.data});
      console.log(movieData);

    }
    catch(error){
      this.setState({
        error: true,
        errorMessage: ` Error Occured: ${error.message}`
      });
    }
  }
  
  getCityData = async (e) => {
    e.preventDefault();
    try{
    this.getMovieData();
    


    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
  
    let cityData = await axios.get(url);
  
    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`;
  
    let weatherData = await axios.get(weatherUrl);
    // console.log('weatherData', weatherData);

    // let movieUrl = `${process.env.REACT_APP_SERVER}/movie?query=${cityData.data[0].city_name}`;
    // console.log(movieUrl);

    // let movieData = await axios.get(movieUrl);
    // console.log('movie--------------------', movieData);
   
  
    this.setState({cityData: cityData.data[0]});
    this.setState({longitude: cityData.data[0].lon});
    this.setState({lattitude: cityData.data[0].lat});
    this.setState({city: cityData.data[0].display_name});
    this.setState({weatherData: weatherData.data});
    
    // this.setState({movieData: movieData.data});
  }
  catch(error) {
    this.setState({
      error: true,
      errorMessage: `error occurred: ${error.message}`
    })
  }
  
}




render() {
  console.log('this is movieData ----------', this.state.movieData);



  return (
    <>
    
    
    <div>

        <form onSubmit={this.getCityData}>
          <label>pick a city
            <input type='text' onInput={this.handleInput} />

          </label>

          <button type='submit' >Explore</button>
        </form>

    </div>
    
    {this.state.showWeather &&<Weather weatherData={this.state.weatherData} />}



        
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lattitude},${this.state.longitude}&zoom=13&size=440x400`} alt={this.state.city} />
        

        <Card.Body>
          <Card.Title>{this.state.city}</Card.Title>
          <Card.Text>
            Lattitude: {this.state.lattitude}
          </Card.Text>
          <Card.Text>
            Longitude: {this.state.longitude}
          </Card.Text>

        </Card.Body>
      </Card>

      { <Movie movieData={this.state.movieData} />}

      {
        this.state.error ? <p>{this.state.errorMessage}</p> : <p></p>
      }

    </>
    
  );

}





}






export default App;
