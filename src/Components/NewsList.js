import React, { useEffect, useState } from 'react';
import { Container} from '@material-ui/core';

import { APIDATA, newsHeaderTitle} from '../Utils/config';

import { NewsCard } from './NewsCard';
import {NewsContent} from './NewsContent';

export const NewsList = () => {
    const [newsData, setNewsData] = useState([]);
    const [selectNews, setSelectNews] = useState({});
    const [isDescriptionModal, toggleDescriptionModal] = useState(false);

    useEffect(() => {
        fetch(APIDATA.topHeadlines)
        .then(res => res.json())
        .then(response => setNewsData(response.articles))
        .catch(err => console.error(err))
    },[])

    const handleNewsSelect = (selectedNews) => {
        setSelectNews({...selectedNews});
        toggleDescriptionModal(!isDescriptionModal)
    }

    const listingCard = newsData.length ? newsData.map((item, index)=> <NewsCard data={item} key={index} handleNewsSelect={handleNewsSelect} />) : null;

    return (
        <Container maxWidth='xl' className='containerRoot'>
            <h2 className="newsHeader">{newsHeaderTitle}</h2>
           {listingCard}
           <NewsContent toggle={isDescriptionModal} setToggle={toggleDescriptionModal} data={selectNews} />
        </Container>
    )
}