import '../style/homeabout.css';
import homeaboutimg from '../assets/images/HomeAbout.png';
import homeimg from '../assets/images/HomeAboutimg.png';
import aboutimg1 from '../assets/images/aboutimg1.png'
import aboutimg2 from '../assets/images/aboutimg2.png'
import aboutimg3 from '../assets/images/aboutimg3.png'



const Homeabout = () => {
    return (
        <div>
            <div className="position-relative">
                <img src={homeaboutimg} alt='' className="img-fluid position-absolute z-n1 h-100" />
                <div className="container p-5">
                    <div className="text-center">
                        <h3 className="text-white">Why Choose Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column align-items-center ">
                            <img src={homeimg} alt='' className="img-fluid about_img" />
                        </div>
                        <div className="col-md-12 about_para">
                            <p className="text-white">At Manba finanserve, we are more than a loan services provider we are your gateway to financial confidence. When you choose us, you're choosing a dedicated team of professionals who are passionate about helping you achieve your financial goals. Your success is our success, and we're excited to embark on this journey with you. We invite you to experience the Manba finanserve difference – where your financial well-being is our top priority.</p>
                        </div>
                        <div className="">
                            <div>
                                <div className="d-flex flex-row gap-4">
                                    <div className="d-flex">
                                        <img src={aboutimg1} alt="" />
                                    </div>
                                    <div className="text-white">
                                        <h4 >Trusted Expertise</h4>
                                        <p>With decades of experience in the financial industry, we have earned the trust of countlessindividuals and businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vr_line"></div>
                            <div>
                                <div className="d-flex flex-row gap-4">
                                    <div className="d-flex">
                                        <img src={aboutimg2} alt="" />
                                    </div>
                                    <div className="text-white">
                                        <h4 >Comprehensive Loan Options</h4>
                                        <p>We offer a diverse range of loan products to meet every need. Whether you're looking for a personal loan, a gold loan, home loan, or any other type of loan, we have a solution designed just for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vr_line"></div>
                            <div>
                                <div className="d-flex flex-row gap-4">
                                    <div className="d-flex">
                                        <img src={aboutimg3} alt="" />
                                    </div>
                                    <div className="text-white">
                                        <h4>Competitive Rates</h4>
                                        <p>We believe that access to funds should be affordable. That's why we offer some of the most competitive interest rates in the market. We work tirelessly to ensure that borrowing with us is cost-effective.</p>
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

export default Homeabout;