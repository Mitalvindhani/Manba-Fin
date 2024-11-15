import '../style/homeservice.css';
import serviceimg from '../assets/images/homeServiceimg.jpg'
const Homeservice = () => {
    return (
        <div className="container">
            <div className="home_service">
                <img src={serviceimg} alt=""/>
            </div>
        </div>
    );
}

export default Homeservice;