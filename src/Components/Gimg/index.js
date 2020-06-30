import React, { Component } from 'react';
import './styles.css';
class Gimg extends Component {
constructor(props){
super(props);
}
render() {
return (
<div className="img-holder">
	<h1>{this.props.title}</h1>
	<p>{this.props.details}</p>
	<img src={this.props.src} alt="Gallery" className="img-fluid" />
</div>
);
}
}
export default Gimg;