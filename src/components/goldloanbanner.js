import '../style/goldloanbanner.css';
import goldbannerimg from '../assets/images/HomeLoanBannerimg.jpg';

const Goldloanbanner = () => {
    return(
        <div>
            <div>
                <div className="position-relative">
                    <img src={goldbannerimg} alt="" className="img-fluid position-absolute z-n1" />
                    <div className="container">
                        <div className="goldloan_div w-100" >
                            <div>
                                <h2 className="goldloan_banner_title">Instant Approval For <span style={{ color: "#00adef" }}>Gold Loan</span>
                                </h2>                                
                            </div>
                            <div>
                                <p className="text-white goldloan_para">Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant e-Approval</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goldloanbanner;