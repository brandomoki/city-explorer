import React from 'react';
import Movies from './Movies'



class Movie extends React.Component {


  render() {
    
    
    let movieData = this.props.movieData.map((value, index) =>
    
      <Movies key={index} value={value} posterURL={this.props.posterURL}/>
      
      )
      



    return (
      

      
      <>
      {movieData}
      </>
      
      




    )
      // <
      // {this.props.movieData.map((value, index) =>
      // <li key={index}>{value.title} {value.description}</li>)}
      





  }
}


export default Movie;
