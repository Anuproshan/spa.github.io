import React, { Component } from 'react';
import './styles.css';
import OwlCarousel from 'react-owl-carousel';
import PackageCard from '../../Components/PackageCard/index';
class PackageCardSlider extends Component {
kindo= {
responsive:{
0: {
items: 1,
},
450: {
items: 2,
},
767: {
items: 2,
},
1024: {
items: 3,
},
},
}
render() {
return (
<>
<div className="PackageCardSlider_body py-md-5 py-sm-5 py-xs-5">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<OwlCarousel
				className={"owl-theme"}
				loop={true}
				margin={10}
				padding={10}
				nav={true}
				dots={false}
				autoplay={true}
				autoplayTimeout={5000}
				items={3}
				responsive={this.kindo.responsive}
				>
				<div className="item">
				<PackageCard
				rupees="4999"
				title="BASIC PACKAGE"
				monthlyplan="Monthly Plan"
				offerpackage="(5+1) Offer Package"
				free="With 1 Head Massages For Free"
				therapies="32 Therapies in Basic Service"
				available="32 Therapies in Basic Service"

				/>
				</div>
				<div className="item">
				<PackageCard
				rupees="7999"
				title="GOLD"
				monthlyplan="Monthly Plan"
				offerpackage="(10+2) Offer Package"
				free="With 2 Head Massages For Free"
				therapies="54 Therapies in Gold Service"
				available="Is Available For 1 Short Payment"

				/>
				</div>
				<div className="item">
				<PackageCard
				rupees="12999"
				title="PLATINUM"
				monthlyplan="Monthly Plan"
				offerpackage="(15+3) Offer Package"
				free="With 3 Head Massages For Free"
				therapies="64 Therapies in Platinum Service"
				available="Is Available For 1 Short Payment"

				/>
				</div>
				<div className="item">
				<PackageCard
				rupees="4999"
				title="BASIC PACKAGE"
				monthlyplan="Monthly Plan"
				offerpackage="(5+1) Offer Package"
				free="With 1 Head Massages For Free"
				therapies="32 Therapies in Basic Service"
				available="Is Available For 1 Short Payment"

				/>
				</div>
				<div className="item">
				<PackageCard
				rupees="7999"
				title="GOLD"
				monthlyplan="Monthly Plan"
				offerpackage="(10+2) Offer Package"
				free="With 2 Head Massages For Free"
				therapies="54 Therapies in Gold Service"
				available="Is Available For 1 Short Payment"

				/>
				</div>
				<div className="item">
				<PackageCard
				rupees="12999"
				title="PLATINUM"
				monthlyplan="Monthly Plan"
				offerpackage="(15+3) Offer Package"
				free="With 3 Head Massages For Free"
				therapies="64 Therapies in Platinum Service"
				available="Is Available For 1 Short Payment"

				/>
				</div>
				</OwlCarousel>
				</div>
				</div>
				</div>
				</div>
				</>
	);
}
	}
export default PackageCardSlider;