import '../style/homebanner.css';
import homebanner from '../assets/images/Homeloansimg.png';

const Homebanner = () => {
    return (
        <div>
            <div>
                <div className="position-relative">
                    <img src={homebanner} alt="" className="img-fluid position-absolute z-n1" />
                    <div className="container">
                        <div className="banner_div" >
                            <div>
                                <h2 className="banner_title">Bring Your Aspirations To Life,
                                </h2>
                                <h2 style={{ color: "#00adef" }} className="banner_title">With A Quick Loan.</h2>
                            </div>
                            <div>
                                <p className="text-white banner_para">Welcome to Manba Finance, where you can
                                    find a loan solutioncustomised for your needs.</p>
                            </div>
                            <div>
                                <button className="apply_btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homebanner;