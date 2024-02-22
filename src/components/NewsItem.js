import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, ImageUrl, newsUrl } = this.props
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!ImageUrl ? "https://static.toiimg.com/thumb/msid-107836901,width-1070,height-580,imgsize-54772,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
