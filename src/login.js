import React from 'react';

class Login extends React.Component{
  state = {
    email:'',
    pwd:''
  }

  handleChange = (e) =>{
    const {name,value} = e.target
    this.setState({[name]:value})

  }
  handleSubmit = (e) => {

  }
  render(){
    return(
      <div className = 'login'>
      <h2>Log In</h2>
        <form onSubmit = {this.handleSubmit}>
        <input type = 'email' name = 'email' placeholder = 'Email' required onChange = {this.handleChange}/>
        <input type = 'password' name ='pwd' placeholder = 'Password' required onChange = {this.handleChange}/>
        <button onSubmit = {this.handleSubmit}> Log In</button>
        </form>
      </div>
    );
  }
}
export default Login;
