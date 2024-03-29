import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)
    

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}
        &page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json()
        console.log(parsedData);
        props.setProgress(80);
        setArticles(parsedData.articles)
        setTotalResult(parsedData.totalResult)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - DailyUpdate`
        updateNews();
        // eslint-disable-next-line 
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
        &apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '32px 0px', marginTop: '90px' }}>Daily Updates from {capitalizeFirstLetter(props.category)}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className='row' key={Element.url}>
                        {articles.map((element) => {
                            return <div className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News