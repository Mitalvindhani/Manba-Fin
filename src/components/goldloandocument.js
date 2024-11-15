import '../style/goldloandocument.css';
import profile from '../assets/images/profile.png';
import form from '../assets/images/registered-document.png';
import proof from '../assets/images/signature.png';
import address from '../assets/images/address.png';
import card from '../assets/images/credit-cards.png';
import identity from '../assets/images/identity-card.png';
import { Link } from 'react-router-dom';


const Goldloandocument = () => {
    return (
        <div className='pt-5'>
            <div className='text-center'>
                <div>
                    <h2>What Are The Documents Required For</h2>
                </div>
                <div>
                    <h2 style={{ color: "#00adef" }}>Gold Loan?</h2>
                </div>
                <div className='pt-4'>
                    <h4>TOOLS TO HELP YOU CHOOSE</h4>
                </div>
            </div>

            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={profile} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>Passport sized photographs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={form} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>Application form</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={proof} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>Signature proof</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={address} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>Address proof</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={card} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>PAN card</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='ps-5'>
                            <div className='d-flex flex-row gap-4'>
                                <div>
                                    <img src={identity} alt='' className='document_img' />
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h5 className='document_text'>Identity proof</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>                    
                        <Link to="/Contactus" className='btn_apply'>APPLY NOW</Link>                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goldloandocument;