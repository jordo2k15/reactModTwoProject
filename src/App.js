import React, {Component} from 'react';
import './App.css';
import logo from './logo.gif';

class App extends Component{
/* Setting the state of our App and the user's guess to a string
*/
  constructor(props){
    super(props);
      this.state = {
        items: [],
        isLoaded: false,
        guess: "",
        isShowing: false,
      }
    }
/* componentDidMount: will fetch the Pokemon ID.
Math.floor(Math.random()) will generate a random number from 0 - 800.
The random number generated will be concatenated into the API link to genarate
the Pokemon.
*/
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/' +  Math.floor(Math.random() * 898))
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items:json,
      })
console.log(json);
    });
  }
  /* Using the arrow function handleChange to accept the user's input.
  */
  handleChange = (e) => {
    this.setState({guess : e.target.value})

  }
  /* Function handleSubmit has the condition that will check if the user's
  submission matches the object's name.
  */
  handleSubmit = (e) =>{
    e.preventDefault()
    if (this.state.guess === this.state.items.name){
    alert("You caught a " + this.state.items.name + '!')
  }else {
    alert("The mystery Pokemon got away!")
  }
  this.setState({isShowing: true}); /* Setting the state of the styling */
  }
  /* If the state of isLoaded is false we will load a .gif file on screen
  Else we will load the data fetched from componentDidMount
  */
render(){
  var {isLoaded} = this.state;
  let revealStyle = this.state.isShowing ? "pokemonShow" : "pokemonHidden"; /* revealStyle is a varable declared to toggle between the className */
  /*If the items are not loaded then the condition is true and a loading
  message will appear*/
    if (!isLoaded){
      return(
        <div className="loading">
          <img src={logo} alt='loading...' width='200px'/>
        </div>
      )
  }
  /*
  */
    else {
      return(
        <div className = 'App-Header'>
          <div className= {revealStyle}>  {/*lines 56 is targetting the className*/}
          <img src={this.state.items.sprites.front_default} alt={this.state.items.name} width="150px"/>
          </div>
          <form className="catch" onSubmit= {this.handleSubmit}>
          <input type= "text" value={this.state.guess} onChange={this.handleChange}/>
          <button type="submit">Catch!</button>
          </form>
        </div>

      )
    }
  }
}
export default App;
