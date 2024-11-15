import '../style/homesuccess.css';
import finance from '../assets/images/finance 1.png';
import team from '../assets/images/team 1.png';
import verified from '../assets/images/verified 1.png';
import medal from '../assets/images/medal 1.png'

const Homesuccess = () => {
    return (
        <div className='pt-5'>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={finance} alt="" className="success_img" />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-secondary">2179</h1>
                            </div>
                            <div className="pt-2">
                                <p className="success_text">Successful Loan Approval</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={team} alt="" className="success_img" />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-secondary">99%</h1>
                            </div>
                            <div className="pt-2">
                                <p className="success_text">Customer Satisfection</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={verified} alt="" className="success_img" />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-secondary">70+</h1>
                            </div>
                            <div className="pt-2">
                                <p className="success_text">Bank / NBFC's</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="text-center">
                            <div>
                                <img src={medal} alt="" className="success_img" />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-secondary">5+</h1>
                            </div>
                            <div className="pt-2">
                                <p className="success_text">Award Winner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homesuccess;