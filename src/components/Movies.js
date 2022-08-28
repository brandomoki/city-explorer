import React from 'react';
import Card from 'react-bootstrap/Card';



class Movies extends React.Component{


  render(){

  
    return(
  
    
      
  
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.value.poster_path}/>
      <Card.Body>
        <Card.Title>{this.props.value.original_title}</Card.Title>
        <Card.Text>
         {this.props.value.overview} 
        </Card.Text>
        <Card.Text>
        {this.props.value.release_date}
        </Card.Text>
        
      </Card.Body>
    </Card>
      
    
      
  
    )
  }
}

  
  
  
  export default Movies;


