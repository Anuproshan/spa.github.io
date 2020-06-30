import React, { Component } from 'react';
import './styles.css';
class PackageCard extends Component {
render() {
return (
<>
<div class="package-wrap">
<div class="package-price img-circle">{this.props.rupees}
<span><i class="fa fa-inr" aria-hidden="true"></i></span>
</div>
<h4>{this.props.title}</h4>
<p>{this.props.monthlyplan}</p>
<p>{this.props.offerpackage}</p>
<p>{this.props.free}</p>
<p>{this.props.therapies}</p>
<p>{this.props.available}</p>
 </div>
</>
);
}
}
export default PackageCard;