import React, { Component } from 'react';
import './styles.css';
import Menus from '../../Components/Menus/index';
class  Sticky extends Component{
constructor(){
super();
this.state = {
scrolled: false,
}
}
componentDidMount(){
window.addEventListener("scroll", () => {
const isTop = window.scrollY < 10;
if (isTop !== true) {
this.setState({scrolled: true});
}
else {
this.setState({scrolled: false});
}
});
}
componentWillUnmount(){
window.removeEventListener("scroll");
}
render(){
return (
<React.Fragment>
<div className={this.state.scrolled ? 'navBar scrolled' : 'navBar'}>
<Menus/>
</div>
</React.Fragment>
);
}
};
export default Sticky;