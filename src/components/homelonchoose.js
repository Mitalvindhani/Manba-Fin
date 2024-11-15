import '../style/homelonchoose.css';
import estate from '../assets/images/real-estate 2.jpg';
import shopping from '../assets/images/shopping 1.jpg';
import briefcase from '../assets/images/briefcase 2.jpg';
import mortgage from '../assets/images/mortgage 1.jpg';


const Homeloanchoose = () => {
    return (
        <div>
            <div>
                <div className='reason_div'>
                    <div className='container'>
                        <div className='row p-5'>
                            
                                <div>
                                    <h2 className='text-center'>Reason to Choose us</h2>
                                    <p className='text-center choosepara'>We offer award-winning, low-rate Home loans with no ongoing fees,saving our customers thousands of Rupee.</p>
                                </div>
                                <div>
                                    <div className="row pt-5">
                                        <div className="col-md-6 mb-5">
                                            <div className="text-center d-flex flex-column gap-3">
                                                <div>
                                                    <img src={estate} alt="" className="choose_img" />
                                                </div>
                                                <div>
                                                    <h3 style={{ color: "#00adef" }}><b>Easy Loan Approvals</b></h3>
                                                </div>
                                                <div>
                                                    <p className="choose_text">Cum sociis natoque penatibus et nis dis parturgnis dis parturient montes, nascetur ridiculus mus..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-5">
                                            <div className="text-center d-flex flex-column gap-3">
                                                <div>
                                                    <img src={shopping} alt="" className="choose_img" />
                                                </div>
                                                <div>
                                                    <h3 style={{ color: "#00adef" }}><b>Lowest Possible Prices</b></h3>
                                                </div>
                                                <div>
                                                    <p className="choose_text">One of the best ways to get a lower interest rate on your personal loan is to improve your credit score before applying for a loan.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-center d-flex flex-column gap-3">
                                                <div>
                                                    <img src={briefcase} alt="" className="choose_img" />
                                                </div>
                                                <div>
                                                    <h3 style={{ color: "#00adef" }}><b>Hassle free</b></h3>
                                                </div>
                                                <div>
                                                    <p className="choose_text">Suspendisse potenti. Nunc ut tellus iquam imperdiet lacus s aliquam felis tincidunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-center d-flex flex-column gap-3">
                                                <div>
                                                    <img src={mortgage} alt="" className="choose_img" />
                                                </div>
                                                <div>
                                                    <h3 style={{ color: "#00adef" }}><b>Secure Loan Processs</b></h3>
                                                </div>
                                                <div>
                                                    <p className="choose_text">Nulla ornare bibendum laoreteger tempus alesuada libero imperdie fermentum senc a ornare risus.</p>
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

export default Homeloanchoose;