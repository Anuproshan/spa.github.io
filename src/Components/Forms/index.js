import React, { Component } from 'react';
import './styles.css';
class Forms extends Component {
render() {
return (
<>
<div className="formsBody py-md-5 py-sm-5">
	<div className="container">
		<div className="row form-wrap">
			<div className="col-md-7 col-sm-7">
				<div className="header-form">
					<h1>Complete Care Under <br/>One Roof Of <span>Red Wine Thai Spa</span></h1>
					<div className="lead">
						<p>Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique accumsan. Pellentesque lla nec faucibus est. In in augue placerat, ligula quis, elementum augue.</p>
						
					</div>
				</div>
			</div>
			<div className="col-md-5 col-sm-5">
				<div className="header-appointment">
					<div className="main-heading">
						Book An Appointment Before 24 Hours<span><i className="fa fa-leaf"></i></span>
					</div>
					<div className="row">
						<div className="col-md-12 col-sm-12 smart-mar">
							<div>
								<div id="sucessmessage"></div>
							</div>
						</div>
						<form method="post" id="contact_form" novalidate="novalidate">
							<div className="col-md-12 col-sm-12">
								<input type="text" name="name" id="name" className="form-control" placeholder="First Name"/>
							</div>
							<div className="col-md-12 col-sm-12">
								<input type="text" name="email" id="email" className="form-control valid" placeholder="Email" aria-required="true" aria-invalid="false"/>
							</div>
							<div className="col-md-12 col-sm-12">
								<input type="text" name="phone" id="phone" className="form-control" placeholder="Phone"/>
							</div>
							<div className="col-md-12 col-sm-12">
								<select title="Please choose a package" required="" name="package" className="form-control" aria-required="true" aria-invalid="false" id="package">
									<option value="">Choose A Service</option>
									<option value="Stone Massage">Full Body Massage</option>
									<option value="Luxury Facial">Swedish Body Massage</option>
									<option value="Body Massage">Lavasa Benesa Massage</option>
									<option value="Pedicure">Mud Body Massage</option>
									<option value="Manicure">Chocolate Body Massage</option>
									<option value="Dazzling Makeup">Stone Body Massage</option>
								</select>
							</div>
							<div className="col-md-12 col-sm-12">
								<button type="submit" className="form-btn" id="form-btn">Book an Appointment</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
);
}
}
export default Forms;