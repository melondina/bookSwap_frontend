import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from "../components/Card/index.tsx";
import Skeleton from "../components/Card/Skeleton.tsx";
import { setItems } from '../redux/slices/cardsSlice.js';


const Home: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const items = useSelector((state) => state.cards.items);
    
    const cardsList = items.map((obj: any) => <Card key={obj.id} {...obj} /> );
    const skeletons = [...new Array(5)].map((_, index) => <Skeleton key={index} />);
    
    const fetchCards = async () => {
        setIsLoading(true);

        try {
            await fetch(
                `https://649bf3520480757192372fa9.mockapi.io/items?`
            )
            .then((res) => {
            return res.json();
            })
            .then((json) => {
            dispatch(setItems(json));
            });
        } catch (error) {
            alert('Ошибка запроса')
        } finally {
            setIsLoading(false);
        }
        
        window.scrollTo(0, 0);
    }


    useEffect( () => {
        fetchCards();
    }, []);

    return (
    <div className="container">
        <h2 className="content__title">Available now</h2>
        <div className="content__items">
            {isLoading 
            ? skeletons 
            : cardsList}
        </div>
    </div>
    )
    }

export default Home;
