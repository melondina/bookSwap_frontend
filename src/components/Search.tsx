import React, { FormEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../redux/slices/searchSlice.js';
import axios from 'axios';


const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [ value, setValue ] = useState('');

//   const onClickClear = (e: React.MouseEvent) => {
//     dispatch( setSearchValue(''));
//     setValue('');
//   }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log("🚀 ~ file: Search.tsx:18 ~ onChangeInput ~ setValue:", value)
    // updateSearchValue(e.target.value);
  }

//   const updateSearchValue = useCallback(
//     debounce((str) => {
//       dispatch( setSearchValue(str));
//     }, 250),
//     []
//   );





const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        const response = await axios.get(`/api/books/?multiSearch=${value}`, { withCredentials: true });
        // if(bookData?.status===201) {
        //     navigate("/library");
        // }
        console.log("🚀 ~ file: Search.tsx:73 ~ handleSubmit ~ response:", response);
        console.log("🚀 ~ file: Search.tsx:77 ~ handleSubmit ~ data:", response.data);
        dispatch(setSearchValue(response.data));
        // return response.data;
        
    } catch (error) {
        console.log(error)
    }
}

const searchValue = useSelector((state) => state.search.searchValue.books);

  console.log("Search Value from Redux Store:", searchValue);





  return (
    <form onSubmit={handleSubmit} className='form-search'>
        <input
        className='form__input'
        value={value}
        onChange={onChangeInput}
        placeholder="Search by title, author" />
    </form>

  )
}

export default Search;
