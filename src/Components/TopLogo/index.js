import React, { Component } from 'react';
import './styles.css';
import top_logo from '../../assets/Red-vine-logo.png';
class TopLogo extends Component {
render() {
return (
<>
<section className="topLpgo_body">
	<div className="container">
		<div className="row">
			<div className="col-md-12 mt-md-4 mt-sm-4">
				<div class="logo text-center">
					<a to="/"><img src={top_logo} alt="Red-vine-logo" title="Red-vine-logo" className="img-fluid"/></a>
				</div>
			</div>
		</div>
	</div>
</section>
</>
);
}
}
export default TopLogo;