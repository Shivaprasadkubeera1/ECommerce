import React, { Component } from 'react';
import { Link } from 'react-router';


class ImageSlider6 extends Component{

  render(){
    return(

    <div class="imageslidercontent6">
        <figure>
            <img src="images/30.webp" class="imageslider6one" />
            <figcaption>
            <p className="caption">Men Essential Outfits</p>
            <li><Link to="/Explore">Explore</Link></li> 
            </figcaption>
        </figure>
        <figure>
            <img src="images/31.webp" class="imageslider6two" />
            <figcaption>
            <p className="caption">Women Apparel Outfits</p>
            <li><Link to="/Explore">Explore</Link></li> 
            </figcaption>
        </figure>
        <figure>
            <img src="images/29.webp" class="imageslider6three" />
            <figcaption>
            <p className="caption">Face Mask Outfits</p>
            <li><Link to="/Explore">Explore</Link></li> 
            </figcaption>
        </figure>
        <figure>
            <img src="images/28.webp" class="imageslider6four" />
            <figcaption>
            <p className="caption">Bedsheets Outfits</p>
            <li><Link to="/Explore">Explore</Link></li> 
            </figcaption>
        </figure>
    </div>

    );
  }
}

export default ImageSlider6;

