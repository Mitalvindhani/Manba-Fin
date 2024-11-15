
import '../style/homecashloan.css';
import cashloan from '../assets/images/cashloanimg.png'
import cashloanleftimg from '../assets/images/cashloanleftimg.png'

const Homecashloan = () =>{
    return(
        <div>
            <div className="">
                <div className='row'>
                    <div className='col-md-12 bg_div'>
                        <img src={cashloan} alt='' className='object-fit-cover bg_img_homeCashLoan'/>
                        <div className='container'>
                            <div className='d-flex flex-column justify-centent-center align-items-center mt-3'>
                                <div className='img_meet mt-5'>
                                    <img src={cashloanleftimg} alt='' className='img-fluid_img_meet'/>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-white mt-4'>Do you need a small cash loan?</h1>
                                <p className='text-white mt-3 fs-3 text_custm_blue'>We’ll provide you with anythig between ₹1,00,000 and ₹50L !</p>
                                <p className='text-white mt-3 fs-5'>If you're facing an unexpected financial expense, such as a medical emergency, car repair, or home repair, you may be considering taking out a small cash loan. Small cash loans are typically unsecured loans, which means you don't need to put up any collateral to get them. They can be a good option for people with less-than-perfect credit or who need money quickly.</p>
                            </div>
                            <a class="btn" href="/contact">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homecashloan;