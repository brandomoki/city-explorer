import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component{
  

  render() {


    return(


      <ListGroup>
      <ListGroup.Item>Weather Report for following day.</ListGroup.Item>
      <ListGroup.Item>{this.props.value.date}</ListGroup.Item>
      <ListGroup.Item>{this.props.value.description}</ListGroup.Item>
      <ListGroup.Item>{this.props.value.temp}</ListGroup.Item>
    </ListGroup>
    )
  }
}


export default WeatherDay;

