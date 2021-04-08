import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';

class Head extends Component{

  render(){
    return(
      
    <div>

     


    <nav className="header">

        <img className="header__logo" src="images/logo.webp" alt="logo"></img> 

        <div className="header__search">
           <input type="text" className="header__searchInput" placeholder="search what you looking for"/>
            <SearchIcon className="header__searchIcon"/> 
       </div> 

      <Link to="/" className="header__link"> 

        <div className="header__option">
        <Link to="/One" className="onelink">WOMEN</Link>
        <Link to="/One" className="onelink">MEN</Link>
        <Link to="/One" className="onelink">KIDS</Link>
        <Link to="/One" className="onelink">KG SALE</Link> 
        <Link to="/One" className="onelink">HOME FURNISHING</Link>
        <Link to="/One" className="onelink">FACE MASK</Link>
        <Link to="/One" className="onelink">SALE</Link>
        </div> 

     </Link> 

   </nav>

   </div>

    );
  }
}

export default Head;