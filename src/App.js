import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import TopLogo from './Components/TopLogo/index';
import Sticky from './Components/Sticky/index';
import Home from './Components/Home/index';
import About from './Components/About/index';
import Services from './Components/Services/index';
import ServiceOne from './Components/ServiceOne/index';
import ServiceTwo from './Components/ServiceTwo/index';
import ServiceThree from './Components/ServiceThree/index';
import ServiceFour from './Components/ServiceFour/index';
import ServiceFive from './Components/ServiceFive/index';
import ServiceSixth from './Components/ServiceSixth/index';
import Gallery from './Components/Gallery/index';
import Package from './Components/Package/index';
import Blog from './Components/Blog/index';
import Contact from './Components/Contact/index';
import PageNotFound from './Components/PageNotFound/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
render(){
return (
<div className="App">
<TopLogo />
<Router>
<div>
<Sticky/>
<Switch>
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/services" component={Services} />
<Route path="/serviceone" component={ServiceOne} />
<Route path="/servicetwo" component={ServiceTwo} />
<Route path="/servicethree" component={ServiceThree} />
<Route path="/servicefour" component={ServiceFour} />
<Route path="/servicefive" component={ServiceFive} />
<Route path="/servicesixth" component={ServiceSixth} />
<Route path="/gallery" component={Gallery} />
<Route path="/package" component={Package} />
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />
<Route component={PageNotFound} />
</Switch>

</div>
</Router>
</div>
);
}
}
export default App;