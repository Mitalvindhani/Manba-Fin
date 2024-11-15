import '../style/businessloanchoose.css';
import learned from '../assets/images/learned.jpg.jpg';
import men from '../assets/images/business men.jpg.jpg';
import women from '../assets/images/business women.jpg.jpg';




const Businessloanchoose = () => {
    return (
        <div className="">
            <div className="business_div p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h2 className='text-center fw-bold'>Reason To Choose Us</h2>
                                <p className='text-center choosepara'>Leveraging business loans strategically enhances growth, stability, and long-term prosperity through responsible financial management and effective deployment.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='pt-5'>
                                    <div className='business_card_service_hover'>
                                        <div className='business_card_service'>
                                            <img src={learned} alt='' className='business_img' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='pt-4 business_text'>When embarking on a new business venture, securing adequate capital is often the first and most significant hurdle. A business loan provides the initial capital injection required to transform your vision into reality. It covers startup costs such as product development, marketing, office space, and equipment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='pt-5'>
                                    <div className='business_card_service_hover'>
                                        <div className='business_card_service'>
                                            <img src={men} alt='' className='business_img' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='pt-4 business_text'>For existing businesses, expansion is the name of the game. Whether you're looking to open new locations, hire additional staff, or diversify your product line, a business loan can provide the financial foundation necessary to fund these growth initiatives.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='pt-5'>
                                    <div className='business_card_service_hover'>
                                        <div className='business_card_service'>
                                            <img src={women} alt='' className='business_img' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='pt-4 business_text'>Many businesses, particularly those in retail or hospitality, experience seasonal fluctuations in revenue. A business loan can help bridge the gap during slow periods, ensuring that your business remains stable and can capitalize on peak seasons.</p>
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

export default Businessloanchoose;