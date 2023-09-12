import React, { useState, useEffect, ChangeEvent } from 'react';
import { setLanguage, resetLanguage } from '../redux/slices/languageFilterSlice';
import { setLocation, resetLocation } from '../redux/slices/locationFilterSlice';
import { setCategory, resetCategory } from '../redux/slices/categoryFilterSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Filter: React.FC = () => {

  const [cleanLanguage, setCleanLanguage] = useState(false);
  const [cleanLocation, setCleanLocation] = useState(false);
  const [cleanCategory, setCleanCategory] = useState(false);


  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/books/filter');
        setData(response.data);
        dispatch(resetLanguage());
        dispatch(resetLocation());
        dispatch(resetCategory());
          } catch (error) {
        console.error('Bad request:', error);
      }
    };
  
    fetchData();
  }, [dispatch]);


  // const resetFilters= () => {
  // };

  // useEffect(() => {
  //   resetFilters();
  // }, [resetFilters]);


  const [data, setData] = useState<any>({
    language: [
      {languageId:1, title:"1"}
    ],
    location: [],
    category: [
      {categoryId: 1, title:"1"}
    ],
  });

  const handleLanguageChange = (language: {languageId: number, title:string}) => {
    dispatch(setLanguage(language));
    setCleanLanguage(true);
  };

  const handleLocationChange = (location: string) => {
    dispatch(setLocation(location));
    setCleanLocation(true);

  }; 

  const handleCategoryChange = (category: {categoryId: number, title:string}) => {
    dispatch(setCategory(category));
    setCleanCategory(true);
  }

  const handleResetFilters = () => {
    // event.preventDefault();
    dispatch(resetLanguage());
    dispatch(resetLocation());
    dispatch(resetCategory());
    // window.location.reload();
    setCleanLanguage(false);
    setCleanLocation(false);
    setCleanCategory(false);
  };



return (
<>
{data.location.length!==0 ? 
<div className="filter-popup">
      <div>
        <h3 className='filter-title'>Language</h3>
        <ul>
          {data.language.map((language: any) => (
            <li key={language.languageId}>
              <label>
                <input type="radio"
                  checked={cleanLanguage}
                  name="language"
                  value={language.title}
                  onChange={() => handleLanguageChange(language)}
                />
                {language.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='filter-title'>Location</h3>
        <ul>
          {data.location.map((location: string) => (
            <li key={location}>
              <label>
                <input type="radio"
                  checked={cleanLocation} 
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
        <h3 className='filter-title'>Category</h3>
        <ul>
          {data.category.map((category: any) => (
            <li key={category.categoryId}>
              <label>
                <input type="radio"
                checked={cleanCategory} 
                name="category"
                value={category.title}
                onChange={() => handleCategoryChange(category)} />
                {category.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button className='button' onClick={handleResetFilters}>Clean filters</button>
  </div> : ''
}
</>);

};

export default Filter;
