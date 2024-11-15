import '../style/businessloanintrest.css';
import money from '../assets/images/money-bag (1) 1.png';
import profit from '../assets/images/profit 1.png';
import nature from '../assets/images/Nature.png';
import score from '../assets/images/Loan Amount.png';
import plan from '../assets/images/analysis 1.png';
import tenure from '../assets/images/money (1) 2.png';
import collateral from '../assets/images/business-credit-score 1.png';
import annual from '../assets/images/Annual Turnover.png';





const Businessloanintrest = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div>
                            <h2 className='intrest_title'>
                                Factors that Affect <span style={{ color: "#00ADEF" }}>Business Loan</span> <br />
                                <span style={{ color: "#00ADEF" }}>Interest Rate</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className='pt-5'>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={money} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Financial Health of Business</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={profit} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Profitability & Stability</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={nature} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Nature of Business</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={score} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>CIBIL Score & Credit History</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={plan} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Business Plan</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={tenure} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Loan Amount & Repayment Tenure</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={collateral} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Collateral</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-5'>
                            <div>
                                <div className='d-flex flex-row gap-4'>
                                    <div>
                                        <img src={annual} alt='' className='document_img' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5 className='document_text'>Annual Turnover</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <button className='btn_apply'>APPLY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Businessloanintrest;