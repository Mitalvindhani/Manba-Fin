import '../style/aboutbanner.css';
import { Link } from "react-router-dom";


const Aboutbanner = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="aboutBanner">
                        <div className="container">
                            <h1>
                                <Link to="/" className='text-white'>home &#62; </Link> <span className='banner_head_text'>About</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <h3 className='text-center'>
                            <Link to="/services" className='fw-bold text-decoration-underline'>WELCOME MESSAGE</Link>
                        </h3>
                    </div>
                </div>
                <div className='pt-4 container'>
                    <div className='text-center'>
                        <h1 className='fw-bold head_text'>Who We Are</h1>
                    </div>
                    <div className=''>
                        <p className='text-center fw-medium'>specialized financial institution that supplies credit for the purchase of consumer goods and services by purchasing the time-sales contracts of merchants or by granting small loans directly to consumers. Specialized consumer finance agencies now operate throughout western Europe, Canada, the United States, Australia, Japan, and some Latin American countries. Although they existed in the early 1900s, their greatest development came after World War II.</p>
                        <p className='text-center fw-medium'>Large-sales finance companies, which operate by purchasing unpaid customer accounts at a discount from merchants and collecting payments due from consumers, were a response to the need for installment financing for the purchase of automobiles in the early 1900s. Ally Financial, for example, was established as the General Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile accounts receivable from car dealers who were themselves unable to finance time purchases. Many companies in both Europe and the United States continue to specialize in financing purchases of particular commodities and remain closely associated with specific manufacturers. Some also extend credit for wholesale purchases by retail dealers.</p>
                        <p className='text-center fw-medium'>Consumer finance or small-loan companies also arose in the 1900s. Until then the need for consumer loans had been met primarily by illegal “loan shark” activities because it was unprofitable for banks to make small loans at rates below legally set usury levels. In 1911 several states in the United States began adopting small-loan laws that authorized loans to consumers at rates above usury levels, making it financially practical to operate a consumer loan business. Today many companies engage both in the sales-finance business and in making loans directly to consumers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutbanner;
