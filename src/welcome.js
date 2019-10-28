import React from 'react';
import Registration from './registration';
import Login from './login';
import Navbar from './navbar';
import Footer from './footer';
import { HashRouter, Route } from 'react-router-dom';

function Welcome() {
    return (
        <HashRouter>
            <Navbar />
            <section className="section height">
                <div className="container height">
                    <div className = "level height">
                        <div className = "level-left column" >
                            <figure className="image" style={{display:'flex', justifyContent: 'center'}}>
                                <img className="has-ratio" src="/assets/trucks.svg" style={{maxWidth: '440px'}}/>
                            </figure>
                        </div>
                        <div className = "level-right">
                            <Route exact path="/" component={Registration}/>
                            <Route path="/login" component={Login}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </HashRouter>
    );
}

export default Welcome;
