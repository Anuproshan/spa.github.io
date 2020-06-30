import React, { Component } from 'react';
import './styles.css';
class PageNotFound extends Component {
render() {
return (
<>
<div className="page_not_found">
	<div className="container">
		<div className="row">
		<div className="col-md-12">
			<div className="Page_Not_Found_inner">
				<h1 className="display-1 text-center">404 Error Page</h1>
				<h3 className="display-1 text-center">Thank You...!</h3>
			</div>
		</div>
		</div>
	</div>
</div>
</>
);
}
}
export default PageNotFound;