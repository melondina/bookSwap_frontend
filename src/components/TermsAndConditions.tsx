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
                Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus 
                Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. </p> 
            <p className='text1'>
                Amet, non gravida rutrum luctus Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare.</p>
            <p className='text2'> 
                Amet, non gravida rutrum luctus Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus.</p>
        
            <button className='button' >
                <Link to="/"> 
                    <span> I agree </span>
                </Link>
            </button>
            </div>   
        </div>
    )
    
}

export default TermsAndConditions;
