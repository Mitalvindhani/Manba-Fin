import '../style/homeprovide.css';
import ecompany1 from '../assets/images/economy 1.png';
import invesment1 from '../assets/images/invesment 1.png';
import agreement1 from '../assets/images/agreement 1.png';
import continuous1 from '../assets/images/continuous 1.png';

const Homeprovide = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={ecompany1} alt="" className="provide_img" />
                            </div>
                            <div>
                                <p className="pt-3 provide_text">Embark on your loan journey, understanding the right loan type – personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={invesment1} alt="" className="provide_img"/>
                            </div>
                            <div>
                                <p className="pt-3 provide_text">Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <div>
                                <img src={agreement1} alt="" className="provide_img"/>
                            </div>
                            <div>
                                <p className="pt-3 provide_text">"Businesses often seek loans for expansion, whether opening new locations, boosting production, or diversifying products. Loans provide vital capital for growth</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <div>
                                <img src={continuous1} alt="" className="provide_img"/>
                            </div>
                            <div>
                                <p className="pt-3 provide_text">In today's dynamic financial landscape, gain essential insights for managing money, investments, and securing your financial future with our expert financial content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homeprovide;