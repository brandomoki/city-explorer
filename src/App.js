import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      longitude: '',
      lattitude: '',
      map: {},


    }
   
  }



  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

getCityData = async (e) => {
  e.preventDefault();
  let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

  let cityData = await axios.get(url);
  

  this.setState({cityData: cityData.data[0]});
  this.setState({longitude: cityData.data[0].lon});
  this.setState({lattitude: cityData.data[0].lat});
  this.setState({city: cityData.data[0].display_name});
  console.log(this.state);
}




render() {



  return (
    <>
    <form onSubmit={this.getCityData}>
      <label>pick a city
      <input type='text' onInput={this.handleInput}/>

      </label>
      
      <button type='submit' >Explore</button>
    </form>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lattitude},${this.state.longitude}&zoom=13&size=440x400`} alt={this.state.city} />
{/* 
      https://maps.locationiq.com/v3/staticmap?key=pk.5ce96405abcbed5189fa03c56a6786d4&center={this.state.lattitude},{this.state.longitude}&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue| */}

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

    


    </>
    
  );

}





}






export default App;
