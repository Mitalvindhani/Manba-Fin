
import '../style/homemultibank.css';
import discount from '../assets/images/discount 1.png';
import hours from '../assets/images/24-hours-support.png';
import wallet from '../assets/images/wallet.png';
import card from '../assets/images/credit-card.png';



const Homemultibank = () => {
    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className='pt-4'>
                        <div>
                            <h3 className='text-center toolshead'>TOOLS TO HELP YOU CHOOSE</h3>
                        </div>
                        <div>
                            <h1 className='text-center tooltitle'>Why borrow with MultiBank</h1>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service d-flex flex-column align-items-center justify-content-center text-center gap-4">
                                <div>
                                    <img src={discount} alt="" className='service_card_img' />
                                </div>
                                <div>
                                    <h4 className="text-white">Get interest rate discount</h4>
                                </div>
                                <div>
                                    <p className='multibnk_para'>In just 30 minutes, an experienced banker will help you get a .25% interest rate discount with an eligible checking and savings account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service  d-flex flex-column align-items-center justify-content-center text-center gap-4">
                                <div>
                                    <img src={hours} alt="" className='service_card_img' />
                                </div>

                                <div>
                                    <h4 className="text-white">Exceptional service from specialists</h4>
                                </div>
                                <div>
                                    <p className='multibnk_para'>The most significant objective is to project gold loans as a 'Good Smart Option, as against being the Last Option' for seeking financial credit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service d-flex flex-column align-items-center justify-content-center text-center gap-4">
                                <div>
                                    <img src={wallet} alt="" className='service_card_img' />
                                </div>

                                <div>
                                    <h4 className="text-white">Convenient payment options</h4>
                                </div>
                                <div>
                                    <p className='multibnk_para'>Make your payments quickly and easily through online and mobile banking, by phone or mail, with recurring automatic payments, or in a branch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className='card_about card_service_hover p-5'>
                            <div className="card_service  d-flex flex-column align-items-center justify-content-center text-center gap-4">
                                <div>
                                    <img src={card} alt="" className='service_card_img' />
                                </div>

                                <div>
                                    <h4 className="text-white">Secure online & mobile banking</h4>
                                </div>
                                <div>
                                    <p className='multibnk_para'>Sign on for 24/7 account access to make payments, transfer money, check balances, and view your statements online.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homemultibank;