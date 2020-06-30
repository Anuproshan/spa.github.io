import React, { Component } from 'react';
import './styles.css';
class Card extends Component {
render() {
return (
<>
<div className="card">
	<img src={this.props.imgsrc} className="card-img-top" alt="..."/>
	<div className="card-body">
		<h5 className="card-title">{this.props.cardtitle}</h5>
		<p className="card-text">{this.props.cardtext}</p>
		<button type="button" to="/" className="btn btn-outline-danger btn-lg iBtn">Read More</button>
	</div>
</div>
</>
);
}
}
export default Card;