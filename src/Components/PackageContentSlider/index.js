import React, { Component } from 'react';
import './styles.css';
import OwlCarousel from 'react-owl-carousel';
import PackageContent from '../../Components/PackageContent/index';
class PackageContentSlider extends Component {
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
items: 4,
},
},
}
render() {
return (
<>
<div className="PackageContentSlider_body py-md-5 py-sm-5 py-xs-5">
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
items={4}
responsive={this.kindo.responsive}
>
<div className="item">
<PackageContent
packageprice="1200"
packagetitle="FULL BODY MASSAGE"
packagetext="A hot stone massage involves flat basalt stones being immersed in hot water"
/>
</div>
<div className="item">
<PackageContent
packageprice="1200"
packagetitle="SWEDISH BODY MASSAGE"
packagetext="The “Chocolate Massage” is a comprehensive therapy session based in real"
/>
</div>
<div className="item">
<PackageContent
packageprice="1700"
packagetitle="LAVASA BODY MASSAGE"
packagetext="The definition of “full-body massage” is in the name: it is a massage therapy session"
/>
</div>
<div className="item">
<PackageContent
packageprice="1500"
packagetitle="MUD BODY MASSAGE"
packagetext="The definition of “full-body massage” is in the name: it is a massage therapy session"
/>
</div>
<div className="item">
<PackageContent
packageprice="1900"
packagetitle="CHOCOLATE BODY MASSAGE"
packagetext="A Swedish massage is one of the best remedy in healing a muscle injury. The pressure a"
/>
</div>
<div className="item">
<PackageContent
packageprice="1900"
packagetitle="STONE BODY MASSAGE"
packagetext="A mud bath is a bath of mud, commonly from areas where hot spring water can"
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
export default PackageContentSlider;