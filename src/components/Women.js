import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Women extends Component{
    render(){
        return (
            
        <div className="container mt-5 carousel"> 

        <Header/>
        <div class="contentwomen">
        
       
        <img src="images/22.webp" alt="ntg" class="onewomen" />
        <img src="images/23.webp" alt="ntg"  class="twowomen"/>
        <img src="images/24.webp" alt="ntg" class="threewomen"/>
        <img src="images/25.webp" alt="ntg"  class="fourwomen"/>
        <img src="images/26.webp" alt="ntg"  class="fivewomen"/>
        <img src="images/27.webp" alt="ntg"  class="sixwomen"/>
        

        </div>
        <Footer/>
        </div>
        );
    }
}

export default Women;