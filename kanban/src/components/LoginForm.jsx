import React, {Component} from 'react';
import './App.css';


class LoginForm extends Component {

	constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  submitLoginForm() {
    if (!this.loginForm) {
      // Nicht gemounted
      return;
    }

    fetch('/api/user', {
      method: 'POST',
      body:   new FormData(this.loginForm)
    }).then(r => console.dir(r))

	.catch(err => console.error(err));

  }

  render() {
    return <form className="ClassLoginForm" ref={f => this.loginForm = f}>
      Login:
      <input type='text'
		  	 className='ClassUserName'
             value={this.state.username}
             onChange=
               {(e)=>this.setState({username: e.target.value })}
      />

      <input
		  className='ClassPassword'
		  type='password'
             value={this.state.password}
             onChange=
               {(e)=>this.setState({password: e.target.value })}
      />

      <button className='ClassLoginButton' onClick={()=>this.submitLoginForm()}>Login</button>
    </form>;
  }
	// constructor(props) {
    //   super(props);
    //   this.state = {user: 'admin'};
    //
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
    //
    // handleChange(event) {
    //   this.setState({user: event.target.value});
    // }
    //
    // handleSubmit(event) {
    //   alert('Der Benutzer ist: ' + this.state.user);
    //   event.preventDefault();
    // }
    //
    // render() {
    //   return (
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Wähle einen Benutzer aus:
    //         <select value={this.state.value} onChange={this.handleChange}>
    //           <option value="admin">Admin</option>
    //           <option value="programmer">Programmierer</option>
    //         </select>
	// 		<input type="password"></input>
    //       </label>
    //       <input type="submit" value="Submit" />
    //     </form>
    //   );
    // }
  }

export default LoginForm;
