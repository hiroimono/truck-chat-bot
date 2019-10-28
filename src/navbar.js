import React from 'react';
import { Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/assets/logo_dark.svg" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <div className="button is-primary">
                                <strong>
                                    <Link to="/"> Register Your Truck</Link>
                                </strong>
                            </div>
                            <div className="button is-light">
                                <strong>
                                    <Link to="/login"> Log in with Truck Info </Link>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
