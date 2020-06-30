import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import ContactTitle from '../../Components/ContactTitle/index';
import ContactForms from '../../Components/ContactForms/index';
import Footer from '../../Components/Footer/index';
class Contact extends Component {
render() {
return (
<section>
<Forms/>
<ContactTitle/>
<ContactForms/>
<Footer/>
</section>
);
}
}
export default Contact;