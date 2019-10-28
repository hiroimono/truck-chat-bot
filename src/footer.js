import React from 'react';
import { Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className="footer" style = {{ position:'fixed', bottom:'0', width: '100%', padding: '5px'}}>
            <div className="content has-text-centered">
                <p>
                    <Link to="/"><i className="fas fa-at"></i><strong> GO </strong></Link>
                    by <a href="https://www.linkedin.com/in/huseyineltutan">Huseyin ELTUTAN</a> 2019, Berlin.
                    The source code is licensed by <a href="https://github.com/hiroimono">HIROIMONO</a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
