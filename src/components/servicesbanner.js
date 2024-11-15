import '../style/servicesbanner.css';
import { Link } from "react-router-dom";


const Servicesbanner = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="serviceBanner">
                        <div className="container">
                            <div className='d-flex flex-column gap-5'>
                            <div>
                                <h2>
                                    <Link to="/" className='text-white'>home &#62; </Link> <span className='banner_head_text'>Service</span>
                                </h2>
                            </div>
                            <div className='animation_text'>
                                <h2 className='text-white'>Our <span className='banner_head_text'>Services</span></h2>
                            </div>
                            <div>
                                <p className='text-white w-50'>Our dedicated customer support team is here to assist you at every stage of your loan journey. Whether you have questions about the application process or need advice on the right loan for your situation, we're just a call or message away.</p>
                            </div>
                            <div>
                                <button className="apply_btn">Apply Now</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Servicesbanner;