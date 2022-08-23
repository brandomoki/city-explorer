import React from 'react';
import axios from 'axios';


class App extends React.Component () {
  constructor(props) {
    super(props);
    locationApiData: []

  }


handleGetLocationApi = async (e) => {
  e.preventDefault();

  let locationData = await axios.get('https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=Empire%20State%20Building&format=json'
  )
}

}

render() {
  return (
    <>
    <h1>HelloWorld</h1>
    
    </>
  );
}



export default App;
