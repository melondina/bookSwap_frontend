import React from 'react';

const Filter = () => {
  
const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
};

  return(

  <div className="filter_container"> 
    
  <article className="columns-3">
   
  <div className="checkbox1">
  
    <h5>FILTER BY GENRE</h5>
    
    <fieldset>
  
    <p>
      <input
        type="radio"
        name="genre"
        value="Fiction"
        id="non-fiction"
        onChange={radioHandler}
      />
      <label htmlFor="books">Fiction</label>
    </p>

    <p>
      <input
        type="radio"
        name="genre"
        value="Non-fiction"
        id="non-fiction"
        onChange={radioHandler}
      />
      <label htmlFor="books">Non-fiction</label>
    </p>

    <p>
      <input
        type="radio"
        name="genre"
        value="Drama"
        id="drama"
        onChange={radioHandler}
      />
      <label htmlFor="books">Drama</label>
    </p>
    <p>
      <input
        type="radio"
        name="genre"
        value="Poetry"
        id="poetry"
        onChange={radioHandler}
      />
      <label htmlFor="books">Poetry</label>
    </p>
    <p>
      <input
        type="radio"
        name="genre"
        value="Mistery"
        id="mistery"
        onChange={radioHandler}
      />
      <label htmlFor="books">Mistery</label>
    </p>
    <p>
      <input
        type="radio"
        name="genre"
        value="Poetry"
        id="poetry"
        onChange={radioHandler}
      />
      <label htmlFor="books">Poetry</label>
    </p>
    <p>
      <input
        type="radio"
        name="genre"
        value="Horror"
        id="horror"
        onChange={radioHandler}
      />
      <label htmlFor="books">Horror</label>
    </p>
  </fieldset>
  
  </div>
    <div className="checkbox2">
    <h5>FILTER BY LANGUAGES</h5>  
      <fieldset>
      <p>
      <input
        type="radio"
        name="language"
        value="French"
        id="non-french"
        onChange={radioHandler}
      />
      <label htmlFor="books">French</label>
    </p>
    <p>
      <input
        type="radio"
        name="language"
        value="German"
        id="german"
        onChange={radioHandler}
      />
      <label htmlFor="books">German</label>
    </p>

    <p>
      <input
        type="radio"
        name="language"
        value="Spanish"
        id="spanish"
        onChange={radioHandler}
      />
      <label htmlFor="books">Spanish</label>
    </p>
    <p>
      <input
        type="radio"
        name="language"
        value="Italian"
        id="italian"
        onChange={radioHandler}
      />
      <label htmlFor="books">Italian</label>
    </p>
    <p>
      <input
        type="radio"
        name="language"
        value="English"
        id="english"
        onChange={radioHandler}
      />
      <label htmlFor="books">English</label>
    </p>
    <p>
      <input
        type="radio"
        name="language"
        value="Russian"
        id="russian"
        onChange={radioHandler}
      />
      <label htmlFor="books">Russian</label>
    </p>
    <p>
      <input
        type="radio"
        name="language"
        value="Ukrainian"
        id="ukrainian"
        onChange={radioHandler}
      />
      <label htmlFor="books">Ukrainian</label>
    </p>
    </fieldset>
       
  <div className="checkbox3">
 
    <h5>FILTER BY CITY</h5>
    <fieldset>
    
    <p>
  <input
        type="radio"
        name="city"
        value="Berlin"
        id="berlin"
        onChange={radioHandler}
      />
      <label htmlFor="books">Berlin</label>
    </p>

    <p>
      <input
        type="radio"
        name="city"
        value="Hamburg"
        id="hamburg"
        onChange={radioHandler}
      />
      <label htmlFor="books">Hamburg</label>
    </p>

    <p>
      <input
        type="radio"
        name="city"
        value="Cologne(Köln)"
        id="cologne(Köln)"
        onChange={radioHandler}
      />
      <label htmlFor="books">Cologne(Köln)</label>
    </p>
    <p>
      <input
        type="radio"
        name="city"
        value="Poetry"
        id="poetry"
        onChange={radioHandler}
      />
      <label htmlFor="books">Poetry</label>
    </p>
    <p>
      <input
        type="radio"
        name="city"
        value="Frankfurt"
        id="frankfurt"
        onChange={radioHandler}
      />
      <label htmlFor="books">Frankfurt</label>
    </p>
    <p>
      <input
        type="radio"
        name="city"
        value="Stuttgart"
        id="stuttgart"
        onChange={radioHandler}
      />
      <label htmlFor="books">Stuttgart</label>
    </p>
    <p>
      <input
        type="radio"
        name="city"
        value="Düsseldorf"
        id="düsseldorf"
        onChange={radioHandler}
      />
      <label htmlFor="books">Düsseldorf</label>
    </p>
    
   
  </fieldset>
 
  
  </div>
  
  </div>
  </article> 
  <button className='view__button'>
  Preview
  </button>
  </div>

);
}
  export default Filter;

