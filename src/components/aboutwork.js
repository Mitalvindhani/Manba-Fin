import '../style/aboutwork.css';
import fastloan from '../assets/images/loan (2) 1.jpg';
import money from '../assets/images/money (1) 1.jpg';
import team from '../assets/images/group 1.jpg';
import help from '../assets/images/help-web-button 1.jpg'

const Aboutwork = () => {
    return (
        <div className='pt-5'>
            <div>
                <div>
                    <h2 className='head_text text-decoration-none text-center fw-bold'>How It Works</h2>

                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-6 mb-4">
                            <div className='card_about p-4'>
                                <div className="d-flex flex-column justify-content-center  align-items-center gap-3">
                                    <div className='card_about_img'>
                                        <img src={fastloan} alt="" className="card_about_imges" />
                                    </div>

                                    <div>
                                        <h3 className='text-white fs-2 text-center'>Fast Loans</h3>
                                        <p className="pt-3 about_text text-center text-white">We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className='card_about p-4'>
                            <div className="d-flex flex-column justify-content-center  align-items-center gap-3">
                                <div className='card_about_img'>
                                    <img src={money} alt="" className="card_about_imges" />
                                </div>

                                <div>
                                    <h3 className='text-white fs-2 text-center'>Flexible Money</h3>
                                    <p className="pt-3 about_text text-center text-white">We understand that financial situations, credit scores, and other fi- nancially-related things can vary.That is why we employ a flexible, person-centric approach to each.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='card_about p-4'>
                            <div className="d-flex flex-column justify-content-center  align-items-center gap-3">
                                <div className='card_about_img'>
                                    <img src={team} alt="" className="card_about_imges" />
                                </div>

                                <div>
                                    <h3 className='text-white fs-2 text-center'>Seasoned team</h3>
                                    <p className="pt-3 about_text text-center text-white">Our experts spent last few years excelling their skills and expanding their practical knowledge. We're the best, each of our crew mem- bers is!</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='card_about p-4'>
                            <div className="d-flex flex-column justify-content-center  align-items-center gap-3">
                                <div className='card_about_img'>
                                    <img src={help} alt="" className="card_about_imges" />
                                </div>

                                <div>
                                    <h3 className='text-white fs-2 text-center'>Helpful</h3>
                                    <p className="pt-3 about_text text-center text-white">With so many mortgages and loans featuring interest rates that are just outright bad, we're here to level the field. Thanks to our re- financing and home equity loan programs you'll.</p>
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

export default Aboutwork;