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
    const sessionFormHeader = (this.props.formType === 'login' ?
      "Log In to 500trails" : "Join 500trails");
    return (
      <div className='loggin-form-page'>
        <div className='inner-form'>
          <form onSubmit={this.handleSubmit} className='login-form'>
            <div className="login-content">
              <h1 className="sign-up">{sessionFormHeader}</h1>

            </div>
            <div className="field-item">
              <label className="username">UserName:
                <br/>
                <input type="text"
                  value={this.state.user_name}
                  onChange={this.update("user_name")}
                  className='login-input'/>
              </label>
            </div>
            <br/>
            <div className="field-item">
              <label className="username">Password:
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className='login-input'/>
              </label>
              </div>
              <br/>
              <div className="field-item">
                <input type="submit" value={this.props.formType}
                  className="submitButton"/>
              </div>
          </form>
        </div>

      </div>
    );
  }

}

export default withRouter(SessionForm);
//withRouter allows for


// <header className='loggin-form-header'>
//   <div>
//     <div className='login-error-messages'>{this.renderErrorMessages()}</div>
//     {this.otherForm()}
//   </div>
// </header>
// <h1 className='headerName'>{sessionFormHeader}</h1>
