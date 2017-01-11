import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          user_name: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  otherForm() {
    if (this.props.formType === 'login') {
     return   <Link to='/signup'><button>Sign Up</button></Link> ;
    } else {
      return <Link to='/login'><button>Log In</button></Link> ;
    }
  }

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  update(property) {
      return e => this.setState({ [property]: e.target.value });
    }

  renderErrorMessages() {
    if (this.state.errors) {
      return(
        <ul>
          {this.props.errors.map((error, ind) => (
            <li key={`error-${ind}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const sessionFormHeader = (this.props.formType === 'login' ? "Log In" : "Join Trails");
    return (
      <div className='loggin-form-container'>
        <header className='loggin-form-header'>
          <div>
            <div className='login-error-messages'>{this.renderErrorMessages()}</div>
            {this.otherForm()}
          </div>
        </header>
        <h1>{sessionFormHeader}</h1>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <label>UserName:
            <br/>
            <input type="text"
              value={this.state.user_name}
              onChange={this.update("user_name")}
              className='login-input'/>
          </label>
          <br/>
          <label>Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className='login-input'/>
          </label>
          <br/>
          <input type="submit" value={this.props.formType}/>
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
//withRouter allows for
