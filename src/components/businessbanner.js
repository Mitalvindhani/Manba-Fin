import '../style/businessbanner.css';
import blbanner from '../assets/images/businsse LoanBanner.jpg'

const Businessbanner = () => {
    return(
        <div>
            <div className="position-relative">
                    <img src={blbanner} alt="" className="img-fluid position-absolute z-n1" />
                    <div className="container">
                        <div className="businessloan_div w-100" >
                            <div>
                                <h2 style={{ color: "rgba(255, 255, 255, 0.8)" }} className="homeloan_banner_title">Instant Approval For
                                </h2>
                                <h2 style={{ color: "#00adef" }} className="businessloan_banner_title">Business Loan</h2>
                            </div>
                            <div>
                                <p className="text-white businessloan_para">Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant e-Approval</p>
                            </div>                            
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Businessbanner;