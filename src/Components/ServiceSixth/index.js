import React, { Component } from 'react';
import './styles.css';
import Forms from '../../Components/Forms/index';
import OurServices from '../../Components/OurServices/index';
import MyTabs from '../../Components/Tabs/index';
import ServicesThatWeProvide from '../../Components/ServicesThatWeProvide/index';
import FemaleToFemale from '../../Components/FemaleToFemale/index';
import FemaleToMale from '../../Components/FemaleToMale/index';
import MaleToMale from '../../Components/MaleToMale/index';
import MaleToFemale from '../../Components/MaleToFemale/index';
import Footer from '../../Components/Footer/index';
class ServiceSixth extends Component {
render() {
return (
<>
<Forms/>
<OurServices/>
<MyTabs />
<ServicesThatWeProvide/>
<FemaleToFemale/>
<FemaleToMale/>
<MaleToMale/>
<MaleToFemale/>
<Footer/>
</>
);
}
}
export default ServiceSixth;