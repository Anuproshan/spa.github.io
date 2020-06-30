import React, { Component } from 'react';
import './styles.css';
class PackageContent extends Component {
render() {
return (
<>
<div className="package-wrap">
<div className="package-price img-circle">{this.props.packageprice}<span><i className="fa fa-inr" aria-hidden="true"></i></span>
</div>
<h4>{this.props.packagetitle}</h4>
<p>{this.props.packagetext}</p>
<a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-default btn-lg buyBtn">Buy Now</a>
</div>
</>
);
}
}
export default PackageContent;