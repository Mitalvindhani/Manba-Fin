import '../style/personalloanbanner.css';
import bannerimg from '../assets/images/personalLoanBanner.png';


const Personalloanbanner = () => {
    return (
        <div>
            <div>
                <div className="position-relative">
                    <img src={bannerimg} alt="" className="img-fluid position-absolute z-n1" />
                    <div className="container">
                        <div className="banner_div" >
                            <div>
                                <h2 className="banner_title">
                                Instant Approval For
                                </h2>
                                <h4 style={{ color: "#00adef" }} className="banner_title ps-3">Personal loan</h4>
                            </div>
                            <div>
                                <p className="text-white banner_para">Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant e-Approval</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personalloanbanner;