import React, { Component } from 'react';
import './styles.css';
class ContactForms extends Component {
render() {
return (
<>
<div className="contact_form_body py-md-5 py-sm-5 py-xs-5">
<form method="post" id="contact_form" className="Redwine_hme">
<div className="container">
<div className="row">
<div id="sucessmessage" className="redwine_success"></div>
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="wrapper-right">
<input type="text" name="name" className="contact_name" id="name" placeholder="Name *"/><br/>
<input type="text" name="email" className="contact_email" id="email" placeholder="Email *"/><br/>
<input type="text" name="tele" className="contact_tel1" id="subject" placeholder="Phone No *"/><br/>
<input type="text" className="contact_tel2" name="tele" id="subject" placeholder="Alter Nate Phone No *"/><br/>
</div>
</div>
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="wrapper-right">
<input type="text" className="contact_address" name="address" id="address" placeholder="Your Address *"/><br/>
<textarea name="message" className="contact_package" id="package" placeholder="Message**"></textarea><br/>
<button type="submit" id="my-btn" className="btn btn-outline-danger btn-md form-btn">Submit</button>
</div>
</div>		
</div>
</div>
</form>
</div>
</>
);
}
}
export default ContactForms;