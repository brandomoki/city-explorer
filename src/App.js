import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',


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
  

  this.setState({
    cityData: cityData,
  })
  console.log(cityData.data[0].lat);
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
      <ListGroup variant="flush">
        <ListGroup.Item>{}</ListGroup.Item>
        <ListGroup.Item>{}</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    


    </>
    
  );

}





}






export default App;
