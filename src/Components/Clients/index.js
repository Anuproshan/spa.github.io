import React, { Component } from 'react';
import './styles.css';
class Clients extends Component {
render() {
return (
<>
<div className="client_Pics">
<img src={this.props.clientPics} alt="ClientsPics" className="img-fluid"/>
</div>
</>
);
}
}
export default Clients;