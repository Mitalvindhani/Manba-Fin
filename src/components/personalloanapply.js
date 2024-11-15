import '../style/personalloanapply.css';
import applyimg from '../assets/images/Applyloan.png';

const Personalloanapply = () => {
    return (
        <div className='pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='text-center'>
                            <div>
                                <h2 style={{ color: "#00adef" }}>How To Apply For a Personal Loan ?</h2>
                            </div>
                            <div>
                                <p className="apply_para">Apply for Manba Finance Personal Loan in 3 easy steps – it’s easy, seamless and quick.</p>
                            </div>
                            <div>
                                <img src={applyimg} alt='' className='apply_img' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='ps-5'>
                        <div className='d-flex flex-row gap-4'>
                            <div className='circle_div'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                                </svg>
                            </div>
                            <div>
                                <h4 className='text-secondary'>Step 1</h4>
                                <p>Verify personal details</p>
                            </div>
                        </div>
                        <div className='apply_vertical_line'></div>
                        <div className='d-flex flex-row gap-4'>
                            <div className='circle_div'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                                </svg>
                            </div>
                            <div>
                                <h4 className='text-secondary'>Step 2</h4>
                                <p>Choose your loan amount and tenure; confirm your bank details</p>
                            </div>
                        </div>
                        <div className='apply_vertical_line'></div>
                        <div className='d-flex flex-row gap-4'>
                            <div className='circle_div'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                                </svg>
                            </div>
                            <div>
                                <h4 className='text-secondary'>Step 3</h4>
                                <p>Receive the loan amount in your bank account</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Personalloanapply;