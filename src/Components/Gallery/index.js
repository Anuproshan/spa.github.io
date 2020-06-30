import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import GalleryText from '../../Components/GalleryText/index';
import Gimages from '../../Components/Gimages/index';
import Footer from '../../Components/Footer/index';
class Gallery extends Component {
render() {
return (
<section>
<Forms />
<GalleryText />
<Gimages/>
<Footer />
</section>
);
}
}
export default Gallery;


