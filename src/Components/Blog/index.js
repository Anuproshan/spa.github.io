import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import BlogHeader from '../../Components/BlogHeader/index';
import BlogSlider from '../../Components/BlogSlider/index';
import Footer from '../../Components/Footer/index';
class Blog extends Component {
render() {
return (
<section>
<Forms/>
<BlogHeader/>
<BlogSlider/>
<Footer/>
</section>
);
}
}
export default Blog;