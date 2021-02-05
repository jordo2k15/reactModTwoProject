import React, {Component} from 'react';
import './App.css';
class App extends Component{
/*Setting the state of our component App --- Creating an array for our Data*/
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
/* this method will reach out to the API and select a random object based on
  the random number generated from Math.floor => Math.random*/
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/' +  Math.floor(Math.random() * 800))
/*Collecting the API date into a JSON format*/
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items:json,
      })
      console.log(json);
    });
  }
  /*Items within this render method will appear in the DOM*/
render(){

  var {isLoaded} = this.state;
  /*If the items are not loaded then the condition is true and a loading
  message will appear*/
  if (!isLoaded){
    return <div>Loading...</div>
  }
  /* Else, render the information gathered from the API into the div/ browser */
  else {
    return(
      <div className = 'App-Header'>
  <div className= 'App'>
  {this.state.items.name}

  </div>
  </div>
)
}
}
}
export default App;
