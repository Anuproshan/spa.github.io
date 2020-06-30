import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import BlogHeader from '../../Components/BlogHeader/index';
import PackageCardSlider from '../../Components/PackageCardSlider/index';
import PackageContentSlider from '../../Components/PackageContentSlider/index';
import Footer from '../../Components/Footer/index';
class Package extends Component {
render() {
return (
<>
<Forms/>
<BlogHeader/>
<PackageCardSlider/>
<PackageContentSlider/>
<Footer/>
</>
);
}
}	
export default Package;