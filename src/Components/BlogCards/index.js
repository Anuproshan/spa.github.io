import React, { Component } from 'react';
import './styles.css';
class BlogCards extends Component {
render() {
return (
<>
<div className="blog-wrap">
	<div className="blog-wrap-img img-circle">
		<img src={this.props.blogpics} className="img-fluid" alt="Blog_pics"/>
	</div>
	<div className="meta-text"><i className="fa fa-clock-o"></i> 04.10.2013 <span>/</span> <a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-tag"></i> Design</a> <span>/</span>
	<a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-comment-o"></i> 2</a></div>
	<h4><a href="/" target="_blank" rel="noopener noreferrer">{this.props.blogtitle}</a></h4>
	<p>{this.props.blogtext}</p>
	<a to="/" className="btn btn-default Blog_btn">Read More</a>
</div>
</>
);
}
}
export default BlogCards;