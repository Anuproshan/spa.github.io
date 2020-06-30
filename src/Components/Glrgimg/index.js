import React from 'react';
import './styles.css';
const Glrgimg = (props) => {
return (
<div>
<div className="lg_img">	
<div className="top_Bar">
<a href="a" onClick={props.closeImg}>+</a>
</div>
<img src={props.src}  alt=""/>
<div className="Bottom_bar">
<h1 className="title">{props.title}</h1>
<div className="description">{props.description}</div>
</div>
</div>
</div>
);
}
export default Glrgimg;