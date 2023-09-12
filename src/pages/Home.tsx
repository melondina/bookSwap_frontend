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


const Home: React.FC = () => {
    const dispatch = useDispatch();
   
    const [isLoading, setIsLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const skeletons = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

    const languageId = useSelector(selectLanguageId);
    const categoryId = useSelector(selectCategoryId);
    const location = useSelector(selectLocation);

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

            window.scrollTo(0, 0);
        }
        fetchCards();

        
    }, [dispatch, languageId, categoryId, location]);

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
                <Search />
                <h2 className="content__title">Available now</h2>
                <div className="content__items">
                    {isLoading
                        ? skeletons
                        : showAll
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
