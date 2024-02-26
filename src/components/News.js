import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: this.propTypes?.number,
        category: this.propTypes?.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e93908fafac546ee8f1c7999bfb80a59&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, totalArticles: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e93908fafac546ee8f1c7999bfb80a59&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e93908fafac546ee8f1c7999bfb80a59&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center my-5">Daily Morning Updates</h1>
                {this.state.loading && <Spinner />}
                <div className='row' key={Element.url}>
                    {!this.state.loading && this.state.articles?.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
                            source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
