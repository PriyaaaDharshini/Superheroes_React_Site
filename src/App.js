import React from 'react';
import AntLayout from "./AntLayout";
import SearchHeroes from "./component/search";
import Header from "./component/header";
import Intro from "./component/intro";
import Footer from "./component/footer";
import SuperHeroDetails from "./component/superHeroDetails";
import {BrowserRouter , Switch,Route } from 'react-router-dom';


const App = () =>{
    return(
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
         <Route exact path="/" component={Intro}/>
         <Route exact path="/superheroes" component={AntLayout}/>
         <Route exact path="/search" component={SearchHeroes}/>
         <Route exact path="/superhero/details" component={SuperHeroDetails}/>
         </Switch>
         <Footer />
      </div> 
      </BrowserRouter>
    );
    
}
export default App;