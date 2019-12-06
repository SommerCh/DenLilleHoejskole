import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/header/header';
import Search from './components/seach';
import Home from './components/home';
import LangeKurser from './components/langeKurser';
import KorteKurser from './components/korteKurser';
import Studieture from './components/studieture';
import KursusCenter from './components/kursusCenter';
import OmSkolen from './components/omSkolen';
import PriserOgTilskud from './components/priserOgTilskud';
import Linjefag from './components/linjefag';
import Foto from './components/linjefag/foto';
import Dans from './components/linjefag/dans';
import Sangskriver from './components/linjefag/sangskriver';
import Adventersport from './components/linjefag/adventersport';
import Emusik from './components/linjefag/emusik';
import Tilmelding from './components/tilmelding';
import Slider from './components/header/slider';
import Footer from './components/footer';
import Fejl404 from './components/fejl404';



function App() {
return (
<div className="App">
  
  <BrowserRouter>
  
    <Header />

    <Slider />

    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/LangeKurser" component={LangeKurser} />
    <Route path="/KorteKurser" component={KorteKurser} />
    <Route path="/Studieture" component={Studieture} />
    <Route path="/KursusCenter" component={KursusCenter} />
    <Route path="/OmSkolen" component={OmSkolen} />
    <Route path="/PriserOgTilskud" component={PriserOgTilskud} />
    <Route path="/Linjefag" component={Linjefag} />
    <Route path="/Tilmelding" component={Tilmelding} />
    <Route path="/Search" component={Search} />
    <Route path="/Foto" component={Foto} />
    <Route path="/Dans" component={Dans} />
    <Route path="/Sangskriver" component={Sangskriver} />
    <Route path="/Emusik" component={Emusik} />
    <Route path="/Adventersport" component={Adventersport} />
  
    <Route component={Fejl404} />

    {/* <Redirect to="/Fejl404" component={Fejl404} />  */}
    
</Switch>
  
  </BrowserRouter>

  <Footer />

</div>

);
}

export default App;