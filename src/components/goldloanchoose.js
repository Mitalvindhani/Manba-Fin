import '../style/goldloanchoose.css';
import easy from '../assets/images/Easy Loan Approvals.png';
import lowest from '../assets/images/Lowest Possible Prices.png';
import hassle from '../assets/images/Hassle free.png';
import secure from '../assets/images/Secure Loan Processs.png';

const Goldloanchoose = () => {
    return (
        <div>
            <div>
                <div className='reason_div'>
                    <div className='container'>
                        <div className='row p-5'>
                            <div>
                                <h2 className='text-center'>Reason to Choose us <span style={{ color: "#00adef" }}>Gold Loan</span></h2>
                                <p className='text-center choosepara'>We Offer Award-Winning, Low-Rate Gold Loans With No Ongoing Fees,Saving Our Customers Thousands Of Rupee.</p>
                            </div>
                            <div>
                                <div className="row pt-5">
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={easy} alt="" className="choose_img" />
                                            </div>
                                            <div>
                                                <h3 style={{ color: "#00adef" }}><b>Easy Loan Approvals</b></h3>
                                            </div>
                                            <div>
                                                <p className="choose_text">At Easy Loan Approvals, we understand that time is of the essence when you need financial assistance. Our user-friendly online application process takes only minutes to complete.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={lowest} alt="" className="choose_img" />
                                            </div>
                                            <div>
                                                <h3 style={{ color: "#00adef" }}><b>Lowest Possible Prices</b></h3>
                                            </div>
                                            <div>
                                                <p className="choose_text">We work tirelessly to secure exclusive discounts and promotions for our users. Our team scours the web for the latest deals, coupons, and limited-time offers, so you don't have to. Saving money has never been easier.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={hassle} alt="" className="choose_img" />
                                            </div>
                                            <div>
                                                <h3 style={{ color: "#00adef" }}><b>Hassle free</b></h3>
                                            </div>
                                            <div>
                                                <p className="choose_text">We firmly believe that financial assistance should not discriminate based on income. Whether you earn a high salary or have a more modest income, everyone deserves the opportunity to secure a loan when needed. Hassle-Free Loans welcomes applicants from all income brackets.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={secure} alt="" className="choose_img" />
                                            </div>
                                            <div>
                                                <h3 style={{ color: "#00adef" }}><b>Secure Loan Processs</b></h3>
                                            </div>
                                            <div>
                                                <p className="choose_text">To prevent identity theft and fraud, we employ rigorous identity verification procedures. Our process verifies that you are who you claim to be, providing an added layer of security to your loan application.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goldloanchoose;