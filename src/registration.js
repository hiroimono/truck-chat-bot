import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { registerNewTrack }  from './actions/actions';
// import axios from './axios'; // we can use axios if we need a database
import { Link } from 'react-router-dom';

function Registration () {
    const dispatch = useDispatch();

    const currentTrackList = useSelector ( state => {
        console.log('state.truckList.trucks: ', state.truckList.trucks);
        let arr = [];
        if (state.truckList.trucks == undefined ) {
            return arr;
        } else return state.truckList.trucks;
    });



    const truckInfo = {};

    const handleChange = (e) => {
        e.preventDefault();
        truckInfo[e.target.name] = e.target.value;
        console.log('truckInfo: ', truckInfo);
    };

    const register = (e) => {
        e.preventDefault();
        console.log('truck list before: ', currentTrackList);
        const newTrucksArray = [ ...currentTrackList, truckInfo];
        dispatch( registerNewTrack(newTrucksArray) );

        // we will need this part after using database if we would like to use database for user registeration and login process
        // axios
        //     .post('/register', truckInfo)
        //     .then((res) => {
        //         if(res.data.success){
        //             console.log('/register, data of registered user: ', res.data);
        //             location.replace("/welcome#/login");
        //         } else {
        //             this.setState({error: true});
        //         }
        //     })
        //     .catch(function(err){
        //         console.log('/register axios error: ', err);
        //         this.setState({error: true});
        //     });
    };


    return (
        <div className="container" style = {{ width: '400px'}}>

            <form>
                <div className="field">
                    <label className="label">Truck Name</label>
                    <div className="control">
                        <input className="input" type="text" autoComplete="truck_name" placeholder="Enter a truck name"
                            name="truck_name"
                            onChange={ handleChange }
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Driver Name</label>
                    <div className="control">
                        <input className="input" type="text" autoComplete="driver_name" placeholder="Enter driver name"
                            name="driver_name"
                            onChange={ handleChange }
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Driver Id</label>
                    <div className="control has-icons-left">
                        <input className="input" type="text" autoComplete="driver_id" placeholder="Enter driver id"
                            name="driver_id"
                            onChange={ handleChange }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Driver Password</label>
                    <p className="control has-icons-left">
                        <input className="input" type="password" autoComplete="driver-password" placeholder="Enter a password"
                            name="driver_password"
                            onChange={ handleChange }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox" style = {{display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
                            <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped" style = {{justifyContent: 'center'}}>
                    <div className="control">
                        <button className="button is-link"
                            onClick={ register }
                        >Register</button>
                    </div>
                </div>
            </form>
            <p style = {{textAlign: 'center'}}>Already registered? <Link to="/login"> Login </Link></p>
        </div>
    );

}

export default Registration;

// { error && <p style = {{fontSize: '20px', textAlign: 'center'}}>Something went wrong. Please try again!</p>; }
