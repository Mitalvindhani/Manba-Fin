import '../style/personalloantypes.css';


const Personalloantypes = () => {
    return (
        <div>
            <div className='container'>
                <div>
                    <div>
                        <h2 style={{ color: "#00adef" }} className="text-center">Types of Personal Loan</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="pt-3">
                            <div>
                                <div>
                                    <ul className="d-flex flex-column gap-3">
                                        <li className="type_list">Wedding Loan</li>
                                        <li className="type_list">Medical Emergency Loan</li>
                                        <li className="type_list">Personal loan for your child(s) future</li>
                                        <li className="type_list">Travel Loan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="pt-3">
                            <div>
                                <div>
                                    <ul className="d-flex flex-column gap-3">
                                        <li className="type_list">Consumer Durable Loan</li>
                                        <li className="type_list">Home Renovation Loan</li>
                                        <li className="type_list">Personal Loan for Women</li>
                                        <li className="type_list">Personal Loan for Students</li>
                                        <li className="type_list">Festival loan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Personalloantypes;