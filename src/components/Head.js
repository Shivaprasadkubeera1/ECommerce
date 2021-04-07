import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';

class Head extends Component{

  render(){
    return(
        <nav className="header">
        <img className="header__logo" src="images/logo.webp" alt="logo"></img> 
        <div className="header__search">
           <input type="text" className="header__searchInput" placeholder="search what you looking for"/>
            <SearchIcon className="header__searchIcon"/> 
       </div> 
        <Link to="/" className="header__link"> 
        <div className="header__option">
           <li><Link to="/Women">WOMEN</Link></li>
           <li><Link to="/Women">WOMEN</Link></li>
           <li><Link to="/Men">MEN</Link></li>
           <li><Link to="/Kids">KIDS</Link></li>
           <li><Link to="/KGSale">KG SALE</Link></li>
           <li><Link to="/HomeFurnishing">HOME FURNISHING</Link></li>
           <li><Link to="/FaceMask">FACE MASK</Link></li>
           <li><Link to="/Sale">SALE</Link></li>
           

           <span className="header__optionLineOne">Account</span>
           <span className="header__optionLineTwo">Wishlist</span>
           <span className="header__optionLineThree">Bag</span>
     </div> 
     </Link> 
   </nav>
    );
  }
}

export default Head;