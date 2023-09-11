import React, { useState, useEffect } from 'react';
import { setLanguage, resetLanguage } from '../redux/slices/languageFilterSlice';
import { setLocation, resetLocation } from '../redux/slices/locationFilterSlice';
import { setCategory, resetCategory } from '../redux/slices/categoryFilterSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLanguageId } from '../redux/slices/languageFilterSlice';
import { selectCategoryId } from '../redux/slices/categoryFilterSlice';

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/books/filter');
      setData(response.data);
    } catch (error) {
      console.error('Bad request:', error);
    }
  };

  const [data, setData] = useState<any>({
    language: [
      {languageId:1, title:"1"}
    ],
    location: [],
    category: [
      {categoryId:1, title:"1"}
    ],
  });

  const handleLanguageChange = (language: {languageId: number,
    title:string}) => {
    dispatch(setLanguage(language));
  };

  const handleLocationChange = (location: string) => {
    dispatch(setLocation(location));
  }; 

  const handleCategoryChange = (category: {categoryId: number,
    title:string}) => {
    dispatch(setCategory(category));
  }

  const handleResetFilters = () => {
    dispatch(resetLanguage());
    dispatch(resetLocation());
    dispatch(resetCategory());
    window.location.reload();
  };

  const resetFilters= () => {
    dispatch(resetLanguage());
    dispatch(resetLocation());
    dispatch(resetCategory());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
<div className="columns-3">
      <div>
        <h2>Language</h2>
        <ul>
          {data.language.map((language: any) => (
            <li key={language.languageId}>
              <label>
                <input type="radio"
                  name="language"
                  value={language.title}
                  onChange={() => handleLanguageChange(language)}
                />
                {language.title}, {language.languageId}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Location</h2>
        <ul>
          {data.location.map((location: string) => (
            <li key={location}>
              <label>
                <input type="radio" 
                  name="location"
                  value={location}
                  onChange={() => handleLocationChange(location)}
                />
                {location}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Category</h2>
        <ul>
          {data.category.map((category: any) => (
            <li key={category.categoryId}>
              <label>
                <input type="radio" 
                name="category"
                value={category.title}
                onChange={() => handleCategoryChange(category)} 
                />
                {category.title}, {category.categoryId}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleResetFilters}>Clean filters</button>
      <Link to="/" onClick={resetFilters}> Back to HomePage </Link>
      <Link to="/" > Use filters </Link>
    </div>
  );
};

export default Filter;

// const Filter = () => {

//   const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//   };

//   return (

//     <div className="filter_container">

//       <article className="columns-3">

//         <div className="checkbox1">

//           <h5>FILTER BY GENRE</h5>

//           <fieldset>

//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Fiction"
//                 id="non-fiction"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Fiction</label>
//             </p>

//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Non-fiction"
//                 id="non-fiction"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Non-fiction</label>
//             </p>

//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Drama"
//                 id="drama"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Drama</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Poetry"
//                 id="poetry"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Poetry</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Mistery"
//                 id="mistery"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Mistery</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Poetry"
//                 id="poetry"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Poetry</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="genre"
//                 value="Horror"
//                 id="horror"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Horror</label>
//             </p>
//           </fieldset>

//         </div>
//         <div className="checkbox2">
//           <h5>FILTER BY LANGUAGES</h5>
//           <fieldset>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="French"
//                 id="non-french"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">French</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="German"
//                 id="german"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">German</label>
//             </p>

//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="Spanish"
//                 id="spanish"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Spanish</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="Italian"
//                 id="italian"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Italian</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="English"
//                 id="english"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">English</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="Russian"
//                 id="russian"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Russian</label>
//             </p>
//             <p>
//               <input
//                 type="radio"
//                 name="language"
//                 value="Ukrainian"
//                 id="ukrainian"
//                 onChange={radioHandler}
//               />
//               <label htmlFor="books">Ukrainian</label>
//             </p>
//           </fieldset>

//           <div className="checkbox3">

//             <h5>FILTER BY CITY</h5>
//             <fieldset>

//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Berlin"
//                   id="berlin"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Berlin</label>
//               </p>

//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Hamburg"
//                   id="hamburg"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Hamburg</label>
//               </p>

//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Cologne(Köln)"
//                   id="cologne(Köln)"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Cologne(Köln)</label>
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Poetry"
//                   id="poetry"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Poetry</label>
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Frankfurt"
//                   id="frankfurt"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Frankfurt</label>
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Stuttgart"
//                   id="stuttgart"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Stuttgart</label>
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   name="city"
//                   value="Düsseldorf"
//                   id="düsseldorf"
//                   onChange={radioHandler}
//                 />
//                 <label htmlFor="books">Düsseldorf</label>
//               </p>


//             </fieldset>


//           </div>

//         </div>
//       </article>
//       <button className='view__button'>
//         Preview
//       </button>
//     </div>

//   );
// }
// export default Filter;
