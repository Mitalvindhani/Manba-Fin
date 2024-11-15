import '../style/contactform.css';

const ContactForm = () => {
    return (
        <div>
            <div>
                <div className='container pt-5 pb-5'>
                    <div className='container p-5 card shadow'>
                        <div>
                            <h2 className='text_custm_blue'>Get In Touch</h2>
                            <p className='fw-medium'>Please contact us or send us an email.</p>
                        </div>
                        <div>
                            <div className='row contact_form_div'>
                                <div className='col-md-6 mb-4'>
                                    <input placeholder='Your Name' className='form-control custom_control' />
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <input placeholder='Your E-mail' className='form-control custom_control' />
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <input placeholder='Your Number' className='form-control custom_control' />
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <input placeholder='Your City' className='form-control custom_control' />
                                </div>
                                <div className='col-md-7 mb-4'>
                                    <select class="form-select custom_control" aria-label="Default select example">
                                        <option selected>----Select Your Loan----</option>
                                        <option value="1">Home Loan</option>
                                        <option value="2">Personal Loan</option>
                                        <option value="3">Gold Loan</option>
                                        <option value="4">Business Loan</option>
                                    </select>
                                </div>
                                <div className='col-md-12'>
                                    <textarea placeholder='Your Messages' className='form-control custom_control'></textarea>
                                </div>
                                <div className='col-md-12'>
                                    <a class="btn" href="/contact">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;