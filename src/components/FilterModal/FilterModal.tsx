import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { setLanguage, resetLanguage } from '../../redux/slices/languageFilterSlice';
import { setLocation, resetLocation } from '../../redux/slices/locationFilterSlice';
import { setCategory, resetCategory } from '../../redux/slices/categoryFilterSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './modal.css';


interface FilterModalProps {
  closeModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ closeModal }) => {
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
    <div className="modal">
      <div className="modal-content">
        <Link to="/Filter" className="modal-close-button">
          Close
        </Link>
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
      </div>
    </div>
  );
};

export default FilterModal;