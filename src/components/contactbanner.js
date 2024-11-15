import '../style/contactbanner.css';
import contact_banner_img from '../assets/images/Contact-Us-Page.png'

const ContactBanner = () => {
    return (
        <div>
            <div className='h-100'>
                {/* <div className="contact_banner"></div> */}
                <img src={contact_banner_img} alt='' className='img-fluid' />
            </div>
        </div>
    );
}

export default ContactBanner;