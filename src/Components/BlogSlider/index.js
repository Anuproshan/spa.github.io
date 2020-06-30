import React, { Component } from 'react';
import './styles.css';
import OwlCarousel from 'react-owl-carousel';
import BlogCards from '../../Components/BlogCards/index';
import PackagePics1 from '../../assets/service-1.jpg';
import PackagePics2 from '../../assets/service-2.jpg';
import PackagePics3 from '../../assets/service-3.jpg';
import PackagePics4 from '../../assets/service-4.jpg';
import PackagePics5 from '../../assets/service-5.jpg';
import PackagePics6 from '../../assets/service-6.jpg';
class BlogSlider extends Component {

kindo= {
responsive:{
0: {
items: 1,
},
600: {
items: 2,
},
767: {
items: 3,
},
1024: {
items: 3,
},
},
}
render() {
return (
<>
<div className="blogSliderBody py-md-5 py-sm-5 py-xs-5">
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
					<BlogCards
					blogpics={PackagePics1}
					blogtitle="OUR SPA"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
					/>
				</div>
				<div className="item">
					<BlogCards
					blogpics={PackagePics2}
					blogtitle="At Beach After Spa"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
					/>
				</div>
				<div className="item">
					<BlogCards
					blogpics={PackagePics3}
					blogtitle="Additional Services"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
					/>
				</div>
				<div className="item">
					<BlogCards
					blogpics={PackagePics4}
					blogtitle="Certified Products"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
					/>
				</div>
				<div className="item">
					<BlogCards
					blogpics={PackagePics5}
					blogtitle="Sun Spa Massage"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
					/>
				</div>
				<div className="item">
					<BlogCards
					blogpics={PackagePics6}
					blogtitle="Sun Bath"
					blogtext="Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue."
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
export default BlogSlider;