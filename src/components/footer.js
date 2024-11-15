import '../style/footer.css';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='bg-dark'>
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='text-center'>
                                <div className=''>
                                    <img src={logo} alt="" className='img-fluid_logo' />
                                    <p className="logo_title fw-semibold">Manba Finaserve</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="text-secondary pt-4 mt-4" />
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <div className='text-center  ftr_para'>
                                <p className='text-white'>With thousands of people starting up new businesses every day, thousands of fami- lies looking for a new mortgage and so on, the loan companies play a vital role in the today's society...</p>
                            </div>
                            <span className='text-white pe-5'><i class="bi bi-geo-alt"></i> 312, superdiamond market</span>
                            <span className='text-white'><i class="bi bi-telephone"></i> +91 22 6212 5000</span>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div>
                                    <h5 className='text-secondary ps-4'>Pages</h5>
                                </div>
                                <div>
                                    <ul className='d-flex flex-column gap-3'>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Home">Home</Link>
                                            
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Aboutus">About Us</Link>
                                            
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Contactus">Contact Us</Link>
                                            
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Services">Services</Link>                    
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div>
                                    <h5 className='text-secondary ps-4'>Loan</h5>
                                </div>
                                <div>
                                    <ul className='d-flex flex-column gap-3'>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Homeloan">Home loan</Link>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Personalloan">Personal loan</Link>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Goldloan">Gold loan</Link>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-angle-right text-white" aria-hidden="true"></i>
                                            <Link className="text-white footer_menu" to="/Businessloan">Business Loan</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div>
                                    <h5 className='text-secondary ps-4'>Social Media</h5>
                                </div>
                                <div>
                                    <ul className='d-flex flex-column gap-3'>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                                            <a className='text-white footer_menu'>Facebook</a>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-instagram text-white" aria-hidden="true"></i>
                                            <a className='text-white footer_menu'>Instagram</a>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-twitter text-white" aria-hidden="true"></i>

                                            <a className='text-white footer_menu'>Twitter</a>
                                        </li>
                                        <li className='d-flex gap-3 justify-content-center align-items-center'>
                                            <i class="fa fa-linkedin text-white" aria-hidden="true"></i>
                                            <a className='text-white footer_menu'>Linkedln</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container p-4'>
                    <div className=' d-flex flex-row justify-content-around'>
                        
                            <div className='copyright_para'>
                                © Manba Finanserve Holdings Limited
                            </div>                       
                        
                            <div className='d-flex flex-row align-items-center gap-3 '>
                                <i class="fa fa-envelope text-dark fs-3" aria-hidden="true"></i>
                                <a href='' className='text-dark copyright_para'>manbafinaserve@gmil.com</a>
                            </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;