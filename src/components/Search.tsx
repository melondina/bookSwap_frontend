import React from 'react';

import { Link } from 'react-router-dom';

const Search: React.FC = () => {

    return (
        <form action="" className='form'>
            <div className='form__search'>
            <input className='form__input' type="search" placeholder='Search for anything...'/>            
            <div className="filter_button">                                     
            <Link to="/Filter" className='links'>
            <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.878906" width="41.4943" height="48" rx="10" fill="#2A2F54"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8789 17V19.3333H31.8789V17H11.8789ZM15.2122 25.1667H28.5456V22.8333H15.2122V25.1667ZM24.1011 31H19.6567V28.6667H24.1011V31Z" fill="white"/>
</svg>
            </Link>
        </div>
    </div>    
</form>
    )
}
export default Search;


