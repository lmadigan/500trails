import React from 'react';
import { Link, withRouter } from 'react-router';
import Greeting from '../greeting/greeting_container';

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
    if (this.props.errors) {
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
    const sessionFormHeader = (this.props.formType === 'login' ?
      "Log In to 500trails" : "Join 500trails");
    const errors = this.renderErrorMessages();
    return (
      <div className='loggin-form-page'>
        <section className="login-form-wrapper">
          <section className="login-error-bar">{errors}</section>
          <div className='inner-form'>
            <form onSubmit={this.handleSubmit} className='login-form'>
              <div className="login-content">
                <h1 className="login-header">{sessionFormHeader}</h1>

              </div>
              <div className="field-item">
                <label className="username">UserName:
                </label>
                  <br/>
                  <input type="text"
                    value={this.state.user_name}
                    onChange={this.update("user_name")}
                    className='login-input'/>
              </div>
              <br/>
              <div className="field-item">
                <label className="username">Password:
                </label>
                  <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className='login-input'/>
                </div>
                <br/>
                <div className="field-item">
                  <input type="submit" value={this.props.formType}
                    className="submitButton"/>
                </div>
            </form>
          </div>
        </section>


      </div>
    );
  }

}

export default withRouter(SessionForm);
