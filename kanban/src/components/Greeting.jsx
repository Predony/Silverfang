import React, {Component} from 'react';
import './App.css';


class Greeting extends Component {
	constructor(props) {
      super(props);
      this.state = {user: 'admin'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({user: event.target.value});
    }

    handleSubmit(event) {
      alert('Der Benutzer ist: ' + this.state.user);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Wähle einen Benutzer aus:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="admin">Admin</option>
              <option value="programmer">Programmierer</option>
            </select>
			<input type="text"></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Greeting;
