import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Kids extends Component{
    render(){
        return (
            <div className="container mt-5 carousel"> 
        <Header/>
        <div class="contentwomen">
        
        <img src="images/2.jpg" alt="ntg" class="onewomen" />
        <img src="images/3.png" alt="ntg"  class="twowomen"/>
        <img src="images/4.jpg" alt="ntg" class="threewomen"/>
        <img src="images/5.jpg" alt="ntg"  class="fourwomen"/>
        <img src="images/6.jpg" alt="ntg"  class="fivewomen"/>
        <img src="images/7.jpeg" alt="ntg"  class="sixwomen"/>

        </div>
        <Footer/>
        </div>
        );
    }
}

export default Kids;