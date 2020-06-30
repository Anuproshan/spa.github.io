import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import Footer from '../../Components/Footer/index';
class About extends Component {
render() {
return (
<section>
<Forms/>
<div class="home_section_one py-md-5 py-sm-5 py-xs-5">
<div class="container">
<div class="row">
<div class="col-md-5 col-sm-12">
<div class="picsBody">
<img src="/static/media/welcom-spa.3de5b4d3.jpg" alt="Pics" class="img-fluid"/>
</div>
</div>
<div class="col-md-7 col-sm-12">
<div class="textBody">
<h1>Welcome To <span>Red Wine Thai Spa</span></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Integer gravida velit quis dolor tristique accumsan. 
 Pellentesque elit tortor, adipiscing vel velit in, ultriciesnulla. 
 Donec in urna sem. Nulla facilisiestibulum ut aliquet agna. </p>
 <p>Nulla nec faucibus est. In in augue placerat, ligula quis, 
 elementum augue. Lorem ipsum dolor sit amet, consectetur 
 adipiscing elit. Integer gravida velit quis dolor tristique 
 accumsan. Pellentesque lla nec faucibus est. In in augue 
 placerat, ligula quis, elementum</p>
 </div>
 </div>
 </div>
 </div>
 </div>
<Footer/>
</section>
);
}
}
export default About;