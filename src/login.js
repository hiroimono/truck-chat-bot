import React from 'react';
// import axios from './axios';
import { Link} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            error: false
        };
    }

    handleChange (e) {
        console.log("e.target.name: ", e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    login (e) {
        // console.log('This is login button!!!');
        e.preventDefault();
        console.log("this.state: ", this.state);
        const userLoginInfo = {
            email: this.state.email,
            password: this.state.password
        };
        // console.log(name, surname, email, password);
        console.log('user: ', userLoginInfo);
        // axios
        //     .post('/login', userLoginInfo)
        //     .then((res) => {
        //         if (res.data.success) {
        //             console.log('/login, data of loggedin user: ', res.data);
        //             location.replace("/");
        //         } else {
        //             this.setState({ error: true });
        //         }
        //
        //     })
        //     .catch((err) => {
        //         console.log('/login axios error: ', err);
        //         this.setState({ error: true });
        //     });
    }


    render(){
        return (
            <div className="container" style = {{ width: '400px'}}>
                { this.state.error && <p style = {{fontSize: '20px', textAlign: 'center'}}>Something went wrong. Please try again!</p> }
                <form>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-danger" type="email" autoComplete="email" placeholder="email"
                                name="email"
                                onChange={ this.handleChange }
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <p className="control has-icons-left">
                            <input className="input" type="password" autoComplete="current-password" placeholder="password"
                                name="password"
                                onChange={ this.handleChange }
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div className="field is-grouped" style = {{justifyContent: 'center'}}>
                        <div className="control">
                            <button className="button is-link"
                                onClick={ this.login }
                            >Login</button>
                        </div>
                    </div>
                </form>
                <p style = {{textAlign: 'center'}}>Have not you registered yet? <Link to="/"> Register </Link></p>
            </div>
        );
    }
}
