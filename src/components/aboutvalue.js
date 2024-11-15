import '../style/aboutvalue.css';

const Aboutvalue = () => {
    return (
        <div className='pt-5 pb-5'>
            <div className='about_value p-5 shadow'>
                <div >
                    <h3 className='head_text text-decoration-none text-center'>Values</h3>
                </div>
                <div>
                    <p className='text-center value_para'>Our values are anchored around our business ethics, consumer focus and <br />corporate responsibility towards society at large.</p>
                </div>
                <div className='pt-5'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>C</h1>
                                <p>Cost-effective & simple</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>R</h1>
                                <p>Respect for all</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>E</h1>
                                <p>Exemplary governance</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>A</h1>
                                <p>Accountability, professionalism & discipline</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>T</h1>
                                <p>CTransparency & integrity</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='text-center'>
                                <h1 className='display-4 fw-medium'>E</h1>
                                <p>Effective teamwork and commitment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutvalue;