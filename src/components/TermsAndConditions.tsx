import React from 'react';
import { Link } from 'react-router-dom';



const TermsAndConditions: React.FC = () => {

    return (
        <div className='terms container termsAndConditionsWrapper'>
            <h3 className='h'>
                Terms and Conditions
            </h3>
            <p className='text'>
            Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus 
            Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus 
            Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus 
            Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus.
            </p>
            <button className='agree' >
                <Link to="/"> 
                    I agree 
                </Link>
            </button>
        </div>
    )
    
}

export default TermsAndConditions;
