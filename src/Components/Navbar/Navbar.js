import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
 

const Navbar = () => {
    return (
        <div className="bg-white">
          
            <ul className="container d-flex list-unstyled list-style-none" >
              <li className="m-3"><Link className="text-dark" to="/home">Home</Link></li>
              <li className="m-3"><Link className="text-dark" to="/beers">Beer</Link></li>
              <li className="m-3"><Link className="text-dark" to="/about">About</Link></li>
            </ul>
          
            
         </div>
    );
};

export default Navbar;