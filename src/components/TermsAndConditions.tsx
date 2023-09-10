import React from 'react';
import { Link } from 'react-router-dom';



const TermsAndConditions: React.FC = () => {

    return (
        <div className='terms container termsAndConditionsWrapper'>
            <h2 className='h'>
                Terms and Conditions
            </h2>
            <div className='content1'>
            <h6 className='h6'>
                Agreement to our legal terms
            </h6>
            <p className='text'>
            
<p>Last updated: 07.09.2023.</p>

Please read these terms and conditions carefully before using Bookswap website operated by "BookSwap".

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.

By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.

<h5>Termination</h5>

We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

All provisions of the Terms, which by their nature should survive termination, shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

<h5>Content</h5>

Our Service allows you to post, link, store, share, and otherwise make available certain information, text or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.

By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.

<h5>Changes</h5>

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is a material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

<h5>Contact Us</h5>

If you have any questions about these Terms, please contact us.
            </p>
            <button type='button' className='button button__yesno' >
                <Link to="/"> 
                    <span> I agree </span>
                </Link>
            </button>
            </div>   
        </div>
    )
    
}

export default TermsAndConditions;
