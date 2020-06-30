import React, { Component } from 'react';
import './styles.css';
import Gimg from '../../Components/Gimg/index';
import Glrgimg from '../../Components/Glrgimg/index';
class Gimages extends Component {
constructor(props){
super(props);
this.state = {
imgList:[
{
imgSrc: "../pics/gallery1.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
},
{
imgSrc: "../pics/gallery2.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
},
{
imgSrc: "../pics/gallery3.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
},
{
imgSrc: "../pics/gallery4.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
},
{
imgSrc: "../pics/gallery5.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
},
{
imgSrc: "../pics/gallery6.jpg",
title: "this is a title",
details: "Details For Image Gallery...!"
}


],
imgStyle:{
imgliststyle:{
display: 'flex'
},
lrgImgStyle: {
display: 'none'
}
},
lrgImg: {
src: '',
title: '',
details: ''
}
}
}
handleClick(e){
e.preventDefault();
if (this.state.imgList.imgliststyle.display === 'flex') {
this.setState({
imgStyle:{
imgliststyle:{
display: 'none'
},
lrgImgStyle: {
display: 'block'
}
}
});
Object.values(this.state.imgList).forEach(element => {
	console.log(element.imgSrc);
	let sourceString = '..'+e.target.src.toString().slice(21); 
	if (element.imgSrc === sourceString) {
		this.setState({
			lrgImg:{
				src: 'e.target.src',
				title: 'element.title',
				details: 'element.details'
			}
		});

	}
	else{
			console.log("Hello");
		}
});
}
}
lrgImgclose =(e)=>{
e.preventDefault();
this.setState({
imgStyle:{
imgliststyle:{
display: 'flex'
},
lrgImgStyle: {
display: 'none'
}
}
});
}
render() {
let imgItemList = this.state.imgList.map(image => {
return(
<button onClick="" style={{background:'none', border: 'none'}} key={image.imgSrc}><Gimg src={image.imgSrc}/></button>
	);
	});
	return (
	<div>
		<div className="lg_image" style={this.state.imgStyle.lrgImgStyle}>
			<Glrgimg closeImg={this.lrgImgclose} src={this.state.lrgImg.src} title={this.state.lrgImg.title} details={this.state.lrgImg.details}/>
			</div>
			<div className="wrapper" style={this.state.imgStyle.imgliststyle}>
				{imgItemList}
			</div>
		</div>
		);
		}
		}
		export default Gimages;