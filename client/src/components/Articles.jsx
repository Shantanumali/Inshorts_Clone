import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';


const Articles = () => {

    useEffect(() => {
        dailyNews();
    }, [])

    const dailyNews = async () => {
        let data = await getNews();
        console.log(data);
    }

    return (
        <p>hello</p>
    )
}

export default Articles;