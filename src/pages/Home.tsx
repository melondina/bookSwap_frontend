import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from "../components/Cards/Skeleton.tsx";
import { setItems } from '../redux/slices/cardsSlice.js';
import Search from '../components/Search.tsx';
import Cards from '../components/Cards/index.tsx';
import { selectLanguageId, resetLanguage } from '../redux/slices/languageFilterSlice.js';
import { selectCategoryId, resetCategory } from '../redux/slices/categoryFilterSlice.js';
import { selectLocation, resetLocation } from '../redux/slices/locationFilterSlice.js';

import ErrorComponent from "../components/ErrorComponent.tsx";

import Filter from '../components/Filter.tsx';
import { ReactComponent as FilterIcon } from '../assets/img/filter.svg';
import { useNavigate } from 'react-router-dom';
import { navigationStatus, setNavigation } from '../redux/slices/navigationSlice.js';

const Home: React.FC = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const [isLoading, setIsLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const skeletons = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

    const languageId = useSelector(selectLanguageId);
    const categoryId = useSelector(selectCategoryId);
    const location = useSelector(selectLocation);
    const searchValue = useSelector((state) => state?.search?.searchValue?.books);
    console.log("🚀 ~ file: Home.tsx:29 ~ searchValue:", searchValue)

    const [errorApi, setErrorApi] = useState(null);
    const [httpStatus, setHttpStatus] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            setIsLoading(true);

            try {
                const locationParam = location === null ? '' : location;

                await fetch(
                    `/api/books/?categoryId=${categoryId || ''}
                    &languageId=${languageId || ''}
                    &location=${locationParam}
                    `
                )
                    .then((res) => {
                        return res.json();
                    })
                    .then((json) => {
                        console.log("books.json", json.books)
                        dispatch(setItems(json.books));
                    });
            } catch (error) {
                setHttpStatus(error.response.status);
                setErrorApi(error.response);
                return { status: error.response.status, data: error.response };
            } finally {
                setIsLoading(false);
            }

            // window.scrollTo(0, 0);
        }
        fetchCards();

        
    }, [dispatch, languageId, categoryId, location]);

    const getBookById = (bookId: number, bla) => {
        navigate(`/bookInfo/${bookId}`)
        console.log(bookId);
        dispatch(setNavigation(bla));
    }


    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
      };

    return (
        <div>
            <div className="header-bottom">
                <h1 className="header-bottom_title">
                    Connect, Share, Immerse
                </h1>
                <p className='header-bottom_desc'>
                    Words Shared, Worlds Explored
                </p>
                {errorApi && (
          <ErrorComponent error={errorApi} httpStatus={httpStatus} />
        )}
            </div>
            <div className="container">
                <div className='content-top'>
                    <div className='content-top__left'>
                    <button className="filter-button" onClick={toggleFilter}>
                    <FilterIcon className="filter-button" />
                </button>
                {isFilterOpen && (
                    <div className="filter-overlay">
                    <Filter />
                    </div>
                )}

                    </div>
                <Search />
                </div>
                <h2 className="content__title">Available now</h2>
                <div className="content__items">
                    {isLoading
                        ? skeletons
                        : searchValue && searchValue.length > 0 
                            ? searchValue.map(({ bookId, title, author, category, language, cover }) => (
                                <div key={bookId} className="card-block-wrapper">
                                <div className="card-block">
                                    <img className="card-block__image" src={cover} alt="card" />
                                    <div className="card-block-desc">
                                        <p className="card-block-desc__top">{title}</p>
                                        <p className="card-block-desc__top">{author}</p>
                                        <p className="card-block-desc__bottom">{category}</p>
                                        <p className="card-block-desc__bottom">{language}</p>
                                        <button className="button button-card" onClick={() => getBookById(bookId, navigationStatus.get)}> More info </button>
                                    </div>
                                </div>
                            </div>
                                                ))
                            : showAll // Если результаты поиска отсутствуют, то отображаем все карточки
                                ? <Cards />
                                : <Cards />}
                </div>
                
            </div>
            {!showAll && (
                <button className="button content__button" onClick={() => setShowAll(true)}>
                    See all
                </button>
            )}
        </div>
    )
}

export default Home;
