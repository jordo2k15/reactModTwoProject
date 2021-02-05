import React from 'react';

class Register extends React.Component {
  state = {
    fName:'',
    lName:'',
    email:'',
    pwd:'',
    pwdConfirm:''
  }
handleChange = (e) => {

}

handleSubmit = (e) => {

}
render (){
  return (
    <div className= 'Register'>
    <h2>Create An Account</h2>
    <form onSubmit = {this.handleSubmit}>
    <input type = 'firstName' name = 'fName' placeholder = 'First Name' required onChange = {this.handleChange}/>
    <input type = 'lastName' name = 'lName' placeholder = 'Last Name' required onChange = {this.handleChange}/>
    <input type = 'email' name = 'email' placeholder = 'Email' required onChange = {this.handleChange}/>
    <input type = 'password' name = 'pwd' placeholder = 'Password' required onChange = {this.handleChange}/>
    <input type = 'password' name = 'pwdConfirm' placeholder = 'Confirm Password' required onChange = {this.handleChange}/>
    <button onSubmit = {this.handleSubmit}>Submit</button>
    </form>
    </div>
  )
}
}
export default Register;
