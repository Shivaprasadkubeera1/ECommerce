import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Men extends Component{
    render(){
        return (
            <div className="container mt-5 carousel"> 
        <Header/>
        <div class="contentwomen">
        
        <img src="images/11.webp" alt="ntg" class="onewomen" />
        <img src="images/12.webp" alt="ntg"  class="twowomen"/>
        <img src="images/13.webp" alt="ntg" class="threewomen"/>
        <img src="images/14.webp" alt="ntg"  class="fourwomen"/>
        <img src="images/15.webp" alt="ntg"  class="fivewomen"/>
        <img src="images/16.webp" alt="ntg"  class="sixwomen"/>

        </div>
        <Footer/>    
        </div>
        );
    }
}

export default Men;