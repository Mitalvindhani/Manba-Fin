import '../style/contacthelp.css';
import office from '../assets/images/office-building 1(2).jpg';
import phone from '../assets/images/old-typical-phone 1.jpg';
import mail from '../assets/images/email 2.jpg';

const ContactHelp = () => {
    return (
        <div>
            <div className='pt-5'>
                <div>
                    <div>
                        <h2 className='text-center cnct_help_title'>We are here to help you</h2>
                    </div>
                    <div>
                        <p className='text-center cnct_help_para'>Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.</p>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-md-6 mb-5">
                                    <div className='p-5 card shadow'>
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={office} alt="" className="provide_img" />
                                            </div>
                                            <div>
                                                <h3 className='cnct_title'>BRANCH OFFICE</h3>
                                            </div>
                                            <div>
                                                <p className="provide_text">312, super diamond market, surat</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className='p-5 card shadow'>
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={phone} alt="" className="provide_img" />
                                            </div>
                                            <div>
                                                <h3 className='cnct_title'>CALL US AT</h3>
                                            </div>
                                            <div>
                                                <p className="provide_text">+91 22 6212 5000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className='p-5 card shadow'>
                                        <div className="text-center d-flex flex-column gap-3">
                                            <div>
                                                <img src={mail} alt="" className="provide_img" />
                                            </div>
                                            <div>
                                                <h3 className='cnct_title'>EMAIL ADDRESS</h3>
                                            </div>
                                            <div>
                                                <p className="provide_text">Manbafinaserve@gmail.com</p>
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

export default ContactHelp;