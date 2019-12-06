import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
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
    <Route path="/Fejl404" component={Fejl404} />
      
      <Route exact path="/" component={Home} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/LangeKurser" component={LangeKurser} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/KorteKurser" component={KorteKurser} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Studieture" component={Studieture} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/KursusCenter" component={KursusCenter} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/OmSkolen" component={OmSkolen} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/PriserOgTilskud" component={PriserOgTilskud} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Linjefag" component={Linjefag} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Tilmelding" component={Tilmelding} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Search" component={Search} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Foto" component={Foto} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Dans" component={Dans} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Sangskriver" component={Sangskriver} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Emusik" component={Emusik} />
      <Redirect to="/Fejl404" component={Fejl404}/>

      <Route path="/Adventersport" component={Adventersport} />
      <Redirect to="/Fejl404" component={Fejl404}/>

    </Switch>
  </BrowserRouter>

  <Footer />

</div>

);
}

export default App;