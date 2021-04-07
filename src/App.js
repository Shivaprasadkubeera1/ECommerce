import './App.css';
import { Router, Route, Link, browserHistory, Switch } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';

import Head from './components/Head';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Header4 from './components/Header4';
import Header5 from './components/Header5';

import ImageSlider1 from './components/ImageSlider1';
import ImageSlider2 from './components/ImageSlider2';
import ImageSlider3 from './components/ImageSlider3';
import ImageSlider4 from './components/ImageSlider4';
import ImageSlider5 from './components/ImageSlider5';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div class="header">
      </div>

       <Head/>
       <Header1/>
       <ImageSlider1/><br/><br/><br/><br/>
       <Header2/>
       <ImageSlider2/><br/><br/><br/><br/>
       <Header3/>
       <ImageSlider3/><br/><br/><br/><br/>
       <Header4/>
       <Header5/>
       <ImageSlider4/><br/><br/><br/><br/>
       <ImageSlider5/>
      </header>
    </div>
  );
}

export default App;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)
// npm install --save react-router
// npm install react-router@3 --save
// npm install @material-ui/core
// npm install firebase
// npm install react-currency-format
// npm install react-dom
// npm install react-router-dom