import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    renderErrors () {
        return (
            <ul>
                {this.props.errors.map( (error, idx) => (
                    <li key={idx} className='errors-text-login'>{error}</li>
                ))}
            </ul>
        )
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    handleDemoUser(e) {
        this.setState({
            email: 'd116',
            password: '123456'
        })
    }

    render() {
        return (
            <div className='session-form-container'>
                <form onSubmit={this.handleSubmit} className='session-form'>
                <div className="logo">
                    <h2>TwixterTube</h2>
                </div>
                <header className="session-form-header">
                    <h2>Sign In</h2>
                    <h4>to continue to TwixterTube</h4>
                </header>
                    <div className='session-input-fields'>
                        <label>
                            <input type="text" id="email-input" value={this.state.email} placeholder='Email' onChange={this.update('email')} />
                        </label>
                        <label>
                            <input type="password" id='password-input' value={this.state.password} placeholder='Password' onChange={this.update('password')} />
                        </label>
                    </div>
                    <div className='session-form-buttons'>
                        <Link to={`/signup`} className='session-form-buttons-Links'>
                            Create account
                        </Link>
                        {/* <button onClick={() => this.nextPath('/signup') }>
                            Create account
                        </button> */}
                        <button onClick={this.handleDemoUser} className='next-button'>Demo</button>
                        <button onClick={this.handleSubmit} className='next-button'>Next</button>
                    </div>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default Login;