import React, { Component } from 'react';
import './styles.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Slider from '../../Components/Slider/index';
import slider1 from '../../assets/01.jpg';
import slider2 from '../../assets/02.jpg';
import slider3 from '../../assets/03.jpg';
import slider4 from '../../assets/04.jpg';
import slider5 from '../../assets/05.jpg';
import slider6 from '../../assets/01.jpg';
import cardPics1 from '../../assets/gallery1.jpg';
import cardPics2 from '../../assets/gallery2.jpg';
import cardPics3 from '../../assets/gallery3.jpg';
import cardPics4 from '../../assets/gallery4.jpg';
import cardPics5 from '../../assets/gallery5.jpg';
import cardPics6 from '../../assets/gallery6.jpg';
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery6 from '../../assets/gallery6.jpg';
import Pics from '../../assets/welcom-spa.jpg';
import monthlyOfferPics from '../../assets/monthly-offer-img.jpg';
import Card from '../../Components/Card/index';
import PackageContent from '../../Components/PackageContent/index';
import Clients from '../../Components/Clients/index';
import BlogCards from '../../Components/BlogCards/index';
import Footer from '../../Components/Footer/index';
class Home extends Component {
kindo= {
responsive:{
0: {
items: 1,
},
450: {
items: 1,
},
767: {
items: 2,
},
1000: {
items: 4,
},
},
}
render() {
return (
<section>
<div className="Home_body">
	<Slider
	imgsrc1={slider1}
	title1="Full Body Massage"
	txt1="Available for you only"
	imgsrc2={slider2}
	title2="Swedish Body Massage"
	txt2="Available for you only"
	imgsrc3={slider3}
	title3="Lavasa Benesa Massage"
	txt3="Available for you only"
	imgsrc4={slider4}
	title4="Mud Body Massage"
	txt4="Available for you only"
	imgsrc5={slider5}
	title5="Chocolate Body Massage"
	txt5="Available for you only"
	imgsrc6={slider6}
	title6="Stone Body Massage"
	txt6="Available for you only"
	/>
	<div className="home_section_one pt-md-5 pt-sm-5 pt-xs-5">
		<div className="container">
			<div className="row">
				<div className="col-md-5 col-sm-12">
					<div className="picsBody">
						<img src={Pics} alt="Pics" className="img-fluid"/>
					</div>
				</div>
				<div className="col-md-7 col-sm-12">
					<div className="textBody">
						<h1>Welcome To <span>Red Wine Thai Spa</span></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique accumsan. Pellentesque elit tortor, adipiscing vel velit in, ultriciesnulla. Donec in urna sem. Nulla facilisiestibulum ut aliquet agna. </p><br/>
						<p>Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristique accumsan. Pellentesque lla nec faucibus est. In in augue placerat, ligula quis, elementum augue.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="service_section py-md-5 py-sm-5">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<div className="headings">
						<h1>Our Services</h1>
						<span><i class="fa fa-leaf"></i></span>
					</div>
				</div>
			</div>
			<div className="row mt-md-5 mt-sm-5">
				<OwlCarousel
				className={"owl-theme"}
				loop={true}
				margin={10}
				padding={10}
				nav={true}
				dots={false}
				autoplay={true}
				autoplayTimeout={5000}
				items={4}
				responsive={this.kindo.responsive}
				>
				<div className={"item"}>
					<Card
					imgsrc={cardPics1}
					cardtitle="Hot Stone Massage"
					cardtext="A hot stone massage involves flat
					basalt stones being immersed in hot water and
					then"
					/>
				</div>
				<div className={"item"}>
					<Card
					imgsrc={cardPics2}
					cardtitle="Chocolate Body Massage"
					cardtext="The “Chocolate Massage” is a comprehensive
					therapy session based in real chocolate and has..."
					/>
				</div>
				<div className={"item"}>
					<Card
					imgsrc={cardPics3}
					cardtitle="Full Body Massage"
					cardtext="The definition of “full-body massage”
					is in the name: it is a massage therapy session"
					/>
				</div>
				<div className={"item"}>
					<Card
					imgsrc={cardPics4}
					cardtitle="Swedish Body Massage"
					cardtext="A Swedish massage is one of the best remedy
					in healing a muscle injury. The pressure applied at
					"
					/>
				</div>
				<div className={"item"}>
					<Card
					imgsrc={cardPics5}
					cardtitle="Lavasa Body Massage"
					cardtext="In a Swedish massage, the therapist lubricates the skin
					with massage oil or lotion and.
					"
					/>
				</div>
				<div className={"item"}>
					<Card
					imgsrc={cardPics6}
					cardtitle="Mud Body Massage"
					cardtext="A mud bath is a bath of mud, commonly from areas where
					hot spring water can combine with..."
					/>
				</div>
				</OwlCarousel>
			</div>
		</div>
	</div>
	<div className="monthly-offer py-md-5 py-sm-5">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-sm-12 offset-md-2">
					<div className="row">
						<div className="col-md-4 col-sm-4 text-center">
							<img src={monthlyOfferPics} alt="monthly_offer" className="img-fluid offers_pics"/>
						</div>
						<div className="col-md-8 col-sm-8 monthly_offer_text">
							<h2>Offer <span>Price</span></h2>
							<h3>Massage</h3>
							<p>Please note that spas may change their prices at any time, and may offer various ... A full body massage is proven to increase your sense of well-being and can ... massage in a facility without any amenities could cost as little as $40 an hour.</p>
							<a href="#" className="btn btn-danger btn-lg offer_btn_a" target="_blank" rel="noopener noreferrer">699/<span><i className="fa fa-inr" aria-hidden="true"></i></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="features_wrapper py-md-5 py-sm-5">
		<div className="container">
			<div class="row">
				<div class="col-md-12 text-center"><div class="headings"><h1>Few Awesome Benefits</h1><span><i class="fa fa-leaf"></i></span></div></div></div>
				<div className="row">
					<div className="col-md-7 col-sm-6">
						<h3>Find Your Soul Here</h3>
						<p>A great massage usually includes your arms, legs,
							hands and feet, your neck and back, your stomach and buttocks.
							The area around the breasts is usually massaged but not the breasts themselves.
						Even with a full-body massage, most of you stays covered most of the time</p>
					</div>
					<div className="col-md-7 col-sm-6">
						<h3>Other Amenities</h3>
						<ul className="fa_ul list_colored">
							<li><i className="fa fa-cutlery"></i>Lorem ipsum dolor sit amet</li>
							<li><i className="fa fa-heartbeat"></i>Suspendisse tristique velit vel ligula</li>
							<li><i className="fa fa-beer"></i>Curabitur tincidunt iaculis est posuere</li>
							<li><i className="fa fa-car"></i>Vestibulum vitae nibh elit phasellus sed</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="packageL_body py-md-5 py-sm-5">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div class="headings text-center">
							<h1>Few Awesome Benefits</h1>
							<span><i class="fa fa-leaf"></i></span>
						</div>
					</div>
				</div>
				<div className="row mt-md-5 mt-sm-5">
					<OwlCarousel
					className={"owl-theme"}
					loop={true}
					margin={10}
					padding={10}
					nav={true}
					dots={false}
					autoplay={true}
					autoplayTimeout={5000}
					items={4}
					responsive={this.kindo.responsive}
					>
					<div className={"item"}>
						<PackageContent
							packageprice="1200"
							packagetitle="Hot Stone Massage"
							packagetext="A hot stone massage involves flat
							basalt stones being immersed in hot water and"
							/>
						</div>
						<div className={"item"}>
							<PackageContent
								packageprice="1400"
								packagetitle="Chocolate Body Massage"
								packagetext="The “Chocolate Massage” is a comprehensive
								therapy session based in real"
								/>
							</div>
							<div className={"item"}>
								<PackageContent
									packageprice="1900"
									packagetitle="Full Body Massage"
									packagetext="The definition of “full-body massage”
									is in the name: it is a massage therapy session..."
									/>
								</div>
								<div className={"item"}>
									<PackageContent
										packageprice="1500"
										packagetitle="Swedish Body Massage"
										packagetext="A Swedish massage is one of the best remedy
										in healing a muscle injury. The pressure"
										/>
									</div>
									<div className={"item"}>
										<PackageContent
											packageprice="1800"
											packagetitle="Lavasa Body Massage"
											packagetext="In a Swedish massage, the therapist lubricates the skin
											with massage oil or lotion and"
											/>
										</div>
										<div className={"item"}>
											<PackageContent
												packageprice="1100"
												packagetitle="Mud Body Massage"
												packagetext="A mud bath is a bath of mud, commonly from areas where
												hot spring water can combine"
												/>
											</div>
											</OwlCarousel>
										</div>
									</div>
								</div>
								<div className="clients py-md-5 py-sm-5">
									<div className="container">
										<div className="row">
											<div className="col-md-12 col-sm-12">
												<div class="headings text-center">
													<h1>Red Wine And Thai Spa</h1>
													<span><i class="fa fa-leaf"></i></span>
												</div>
											</div>
										</div>
										<div className="row mt-md-5 mt-sm-5">
											<OwlCarousel
											className={"owl-theme"}
											loop={true}
											margin={10}
											padding={10}
											nav={true}
											dots={false}
											autoplay={true}
											autoplayTimeout={5000}
											items={4}
											responsive={this.kindo.responsive}
											>
											<div className={"item"}>
												<Clients
												clientPics={gallery1}
												/>
											</div>
											<div className={"item"}>
												<Clients
												clientPics={gallery2}
												/>
											</div>
											<div className={"item"}>
												<Clients
												clientPics={gallery3}
												/>
											</div>
											<div className={"item"}>
												<Clients
												clientPics={gallery4}
												/>
											</div>
											<div className={"item"}>
												<Clients
												clientPics={gallery5}
												/>
											</div>
											<div className={"item"}>
												<Clients
												clientPics={gallery6}
												/>
											</div>
											</OwlCarousel>
										</div>
									</div>
								</div>
								<div className="amazingOffer py-md-5 py-sm-5">
									<div className="container">
										<div className="row">
											<div className="col-md-12 col-sm-12">
												<div class="headings text-center">
													<h1>Amazing offers</h1>
													<span><i class="fa fa-leaf"></i></span>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
												<h4 className="text-center">Subscribe to our newsletter for special offers</h4>
												<div className="row">
													<div className="col-sm-3">
														<div className="offer-icon img-circle">
															<i className="fa fa-gift"></i>
														</div>
													</div>
													<div className="col-sm-9">
														<form className="form-inline">
															<div className="form-group">
																<input id="subscribe-email" placeholder="Email Address" name="subscribe-email" className="col-xs-12"/>
															</div>
															<button type="submit" id="subscribe-submit" className="col-xs-push-5 btn btn-default">Subscribe</button>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="Blog_Container py-md-5 py-sm-5">
									<div className="container">
										<div className="row">
											<div className="col-md-12 col-sm-12">
												<div class="headings text-center">
													<h1>Recent Blogs</h1>
													<span><i class="fa fa-leaf"></i></span>
												</div>
											</div>
										</div>
										<div className="row mt-md-5 mt-sm-5">
											<OwlCarousel
											className={"owl-theme"}
											loop={true}
											margin={10}
											padding={10}
											nav={true}
											dots={false}
											autoplay={true}
											autoplayTimeout={5000}
											items={4}
											responsive={this.kindo.responsive}
											>
											<div className={"item"}>
												<BlogCards
												blogpics={gallery1}
												blogtitle="Our Spa"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											<div className={"item"}>	
												<BlogCards
												blogpics={gallery2}
												blogtitle="At Beach After Spa"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											<div className={"item"}>
												<BlogCards
												blogpics={gallery3}
												blogtitle="Additional Services"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											<div className={"item"}>
												<BlogCards
												blogpics={gallery4}
												blogtitle="Certified Products"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											<div className={"item"}>
												<BlogCards
												blogpics={gallery5}
												blogtitle="Sun Spa Massage"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											<div className={"item"}>
												<BlogCards
												blogpics={gallery6}
												blogtitle="Sun Bath"
												blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
												/>
											</div>
											</OwlCarousel>
										</div>
									</div>
								</div>
							</div>
							<Footer/>
								</section>
								);
								}
								}
								export default Home;