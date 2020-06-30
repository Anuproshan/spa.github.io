import React, { Component } from 'react';
import './styles.css';
import 'font-awesome/css/font-awesome.min.css';
class ScrollToTop extends Component {
render() {
return (
<React.Fragment>
	<div className="Scroll_to_top cursor-pointer text-cnter">
		<i className="fa fa-arrow-up" aria-hidden="true"></i>
	</div>
</React.Fragment>
);
}
}
export default ScrollToTop;