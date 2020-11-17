import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';


const Header =()=>{
    return(
    <div className="header">
    <div className="icon"></div>
    <Link to="/">HOME</Link>
    <Link to="/superheroes">SUPERHEROES</Link>
    <Link to="/search">SEARCH SUPERHERO</Link>
    </div>);
}
export default Header;