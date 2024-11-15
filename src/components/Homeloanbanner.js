import '../style/homeloanbanner.css';
import hlbanner from '../assets/images/setupTests.js.jpg'


const Homeloanbanner = () => {
    return (
        <div>
            <div>
                <div className="position-relative">
                    <img src={hlbanner} alt="" className="img-fluid position-absolute z-n1" />
                    <div className="container">
                        <div className="homeloan_div w-100" >
                            <div>
                                <h2 style={{ color: "rgba(255, 255, 255, 0.8)" }} className="homeloan_banner_title">Instant Approval For
                                </h2>
                                <h2 style={{ color: "#00adef" }} className="homeloan_banner_title">Home Loan</h2>
                            </div>
                            <div>
                                <p className="text-white homeloan_para">Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant e-Approval</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homeloanbanner;