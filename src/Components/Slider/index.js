import React, { Component } from 'react';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
class Slider extends Component {
render() {
return (
<React.Fragment>
<section className="My_Slider">
	<Carousel>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc1}
	alt="First slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title1}</h3>
	<p>{this.props.txt1}</p>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc2}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title2}</h3>
	<p>{this.props.txt1}</p>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc3}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title3}</h3>
	<p>{this.props.txt3}</p>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc4}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title4}</h3>
	<p>{this.props.txt4}</p>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc5}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title5}</h3>
	<p>{this.props.txt5}</p>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="d-block w-100"
	src={this.props.imgsrc6}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>{this.props.title6}</h3>
	<p>{this.props.txt6}</p>
	</Carousel.Caption>
	</Carousel.Item>
	</Carousel>
</section>
</React.Fragment>
);
}
};
export default Slider;