import '../style/servicesloan.css';
import personaloan from '../assets/images/backpersonalLoanimg.png';
import goldloan from '../assets/images/backgoldLoanimg.png';
import homeloan from '../assets/images/backhomeloanimg.png';

const Servicesloan = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service d-flex flex-column align-items-center justify-content-center gap-4">
                                <div>
                                    <img src={personaloan} alt="" className='service_card_img' />
                                </div>
                                <div>
                                    <h3 className='text-white fs-2 text-center'>Personal Loan</h3>
                                </div>
                                <div>
                                    <p className="pt-3 about_text text-center text-white">Get Personal Loan Based On Your Credit Profile- From 1 Lakh To 15 Lakh.</p>
                                </div>
                                <div>
                                    <button className="findout_btn">FIND OUT MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service d-flex flex-column align-items-center justify-content-center gap-4">
                                <div>
                                    <img src={goldloan} alt="" className='service_card_img' />
                                </div>
                                <div>
                                    <h3 className='text-white fs-2 text-center'>Gold Loan</h3>
                                </div>
                                <div>
                                    <p className="pt-3 about_text text-center text-white">The most significant objective is to project gold loans as a 'Good Smart Option, as against being the Last Option' for seeking financial credit.</p>
                                </div>
                                <div>
                                    <button className="findout_btn">FIND OUT MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service  d-flex flex-column align-items-center justify-content-center gap-4">
                                <div>
                                    <img src={homeloan} alt="" className='service_card_img' />
                                </div>
                                <div>
                                    <h3 className='text-white fs-2 text-center'>Home Loan</h3>
                                </div>
                                <div>
                                    <p className="pt-3 about_text text-center text-white">Various insurers in India & buy insurance policy online. Get instant quotes & save huge on premiums.</p>
                                </div>
                                <div>
                                    <button className="findout_btn">FIND OUT MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicesloan;