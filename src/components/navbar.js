import '../style/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../App.css';
const NavBar = () => {
    return (
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand ms-5" href="#">
                    <img src={logo} alt="" className='img-fluid_logo'/>
                    <span className="logo_title fw-semibold">Manba Finaserve</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse me-5 pe-3 navbar_div" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item position-relative">
                            <Link className="nav-link fs-5 fw-semibold active" to="/">Home</Link>
                        </li>
                        <li class="nav-item position-relative">
                            <Link className="nav-link fs-5 fw-semibold" to="/about">About Us</Link>
                        </li>
                        <li class="nav-item position-relative">
                            <Link className="nav-link fs-5 fw-semibold" to="/service">Services</Link>
                        </li>
                        <li class="nav-item position-relative">
                            <Link className="nav-link fs-5 fw-semibold" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <button className='button-89'>button</button> */}
        </nav>

        // <div>
        //     <div>
        //         <div className="row">
        //             <div className="d-flex flex-row justify-content-around ">
        //             <div className="col-md-6">
        //                 <div className="d-flex flex-row gap-3">
        //                     <div className="logo">
        //                         <img src={logo} alt=""/>
        //                     </div>
        //                     <div className="d-flex flex-column align-items-center justify-content-center">
        //                         <h1 className="logo_title">Manba Finaserve</h1>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <nav>
        //                     <div className="d-flex flex-row align-items-center justify-content-center pt-3">
        //                         <ul className="d-flex flex-row justify-content-start gap-5">
        //                             <li>
        //                                 <Link to="/" className="nav_link">Home</Link>
        //                             </li>
        //                             <li>
        //                                 <Link to="/about" className="nav_link">About Us</Link>
        //                             </li>
        //                             <li>
        //                                 <Link to="/services" className="nav_link">Services</Link>
        //                             </li>
        //                             <li>
        //                                 <Link to="/contact" className="nav_link" >Contact Us</Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </nav>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default NavBar;