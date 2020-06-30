import React, { Component } from 'react';
import './styles.css';
import footerlogo from '../../assets/Red-vine-logo.png';
class Footer extends Component {
render() {
return (
<section>
<div className="footer_body py-md-5 py-sm-5">
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="footer_innerb left">
					<img src={footerlogo} alt="Red-vine-logo" title="Red-vine-logo" className="img-fluid"/>
					<p id="u68595-2">The definition of “body massage” is in the name:
						it is a massage therapy session that works over all areas of the
						body. A typical full-body massage covers top-to-toes.
					</p>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="footer_inner right">
					<h3>Opening Hours</h3>
					<p>11:00 AM To 9:00 PM</p>
					<p><span><i className="fa fa-whatsapp" aria-hidden="true"></i></span> 7477217141</p>
					<p>info@redwinethaispa</p>
					<ul className="footer_Social">
						<li className="Nav_item">
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
							</a>
						</li>
						<li className="Nav_item">
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
							</a>
						</li>
						<li className="Nav_item">
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								<span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
								<span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
								<span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
								<span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
								<span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
							</a>
						</li>
						<li className="Nav_item">
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
							</a>
						</li>
						<li className="Nav_item">
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								<span><i className="fa fa-instagram" aria-hidden="true"></i></span>
								<span><i className="fa fa-instagram" aria-hidden="true"></i></span>
								<span><i className="fa fa-instagram" aria-hidden="true"></i></span>
								<span><i className="fa fa-instagram" aria-hidden="true"></i></span>
								<span><i className="fa fa-instagram" aria-hidden="true"></i></span>
							</a>
						</li>
					</ul>
					
				</div>
			</div>
		</div>
	</div>
</div>
<div className="copyright py-md-4 py-sm-4">
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-sm-12 copyright_left">
				<p>
					<a href="#" target="_blank" rel="noopener noreferrer">Red Wine &amp; Thai Spa</a> © 2020. All Rights Reserved.
				</p>
			</div>
			<div className="col-md-6 col-sm-12 copyright_right">
				<p>
					Designed &amp; Developed By: <a href="http://dsvwebtech.com/" target="_blank" rel="noopener noreferrer">Ar@kindo</a>
				</p>
			</div>
		</div>
	</div>
</div>
</section>
);
}
}
export default Footer;