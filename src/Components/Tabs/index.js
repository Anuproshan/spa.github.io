import React, { Component } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import { Nav, Row, Col, Tab } from 'react-bootstrap';
import tabsImage1 from '../../assets/01.jpg';
import tabsImage2 from '../../assets/02.jpg';
import tabsImage3 from '../../assets/03.jpg';
import tabsImage4 from '../../assets/04.jpg';
import tabsImage5 from '../../assets/05.jpg';
import tabsImage6 from '../../assets/img-01.jpg';
class MyTabs extends Component {	
render() {
return (
<>
<div className="Services_tabs_body py-md-5 py-sm-5">
<div className="container">
<Tab.Container id="left-tabs-example" defaultActiveKey="1">
<Row>
<Col sm={3}>
<Nav variant="pills" className="flex-column">
<Nav.Item>
<Nav.Link eventKey="1">Full Body Massage</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="2">Swedish Body Massage</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="3">Lavasa Benesa Massage</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="4">Mud Body Massage</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="5">Chocolate Body Massage</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="6">Stone Body Massage</Nav.Link>
</Nav.Item>
</Nav>
</Col>
<Col sm={9}>
<Tab.Content>
<Tab.Pane eventKey="1">
<h3>Full Body Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage1} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
<Tab.Pane eventKey="2">
<h3>Swedish Body Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage2} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
<Tab.Pane eventKey="3">
<h3>Lavasa Benesa Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage3} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
<Tab.Pane eventKey="4">
<h3>Mud Body Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage4} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
<Tab.Pane eventKey="5">
<h3>Chocolate Body Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage5} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
<Tab.Pane eventKey="6">
<h3>Stone Body Massage</h3>
<hr className="w-100 border-danger"/>
<div class="holder">
<div class="img-holder">
<img src={tabsImage6} alt="Tab_pics" className="img-fluid"/>
</div>
<div class="stone-content">
<p>Duration: 90 minutes</p>
<p>Pre-heated volcanic stones are applied to the key points of the body, giving a deep massage and creating sensations of comfort and warmth. It is highly effective for muscle relaxation, improving blood circulation, easing stress and increasing energy level. Contact us to find out more about the benefits of this massage for healing arthritis, stress, anxiety, circulatory problems, insomnia, depression and multiple sclerosis.</p>
<a href="package.html" className="btn btn-outline-danger btn-md">Book Now</a>
</div>
</div>
</Tab.Pane>
</Tab.Content>
</Col>
</Row>
</Tab.Container>
</div>
</div>
</>
);
}
}
export default MyTabs;