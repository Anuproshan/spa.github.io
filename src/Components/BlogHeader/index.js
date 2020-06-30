import React, { Component } from 'react';
import './styles.css';
class BlogHeader extends Component {
render() {
return (
<>
<div className="BlogHeader_body py-md-5 py-sm-5 py-xs-5">
	<div className="ckontainer">
		<div className="row">
			<div className="col-md-12 text-center">
				<div class="headings">
					<h1>Recent Post</h1>
					<span>
						<i class="fa fa-leaf"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
</>
);
}
}
export default BlogHeader;