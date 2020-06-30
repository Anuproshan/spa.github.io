import React, { Component } from 'react';
import './styles.css';
import Female_Pics1 from '../../assets/03.jpg';
import Female_Pics2 from '../../assets/05.jpg';
class MaleToFemale extends Component {
render() {
return (
<>
<div className="Male_To_Female py-md-5 py-sm-5">
	<div className="container">
		<div className="row">
			<div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-xs-12">
				<div class="maletofemale text-center pb-md-5 pb-sm-5">
					<h1>Male To female</h1>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="customer-services">
					<img src={Female_Pics1} alt="Female" title="female" className="img-fluid"/>
				</div>
				<div className="spa-contents">
					<h3>Male To Female</h3>
					<p>With keeping in mind the comfort zone of our female clients, we make avail the services of spa with well trained and professional...</p>
					<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
				</div>
				
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="customer-services">
					<img src={Female_Pics2} alt="Female" title="female" className="img-fluid"/>
				</div>
				<div className="spa-contents">
					<h3>Male To Female</h3>
					<p>With keeping in mind the comfort zone of our female clients, we make avail the services of spa with well trained and professional...</p>
					<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
				</div>
			</div>
		</div>
	</div>
</div>
</>
);
}
}
export default MaleToFemale;