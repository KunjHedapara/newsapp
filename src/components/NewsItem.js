import React from 'react'

const NewsItem = (props) => {

    let { title, description, ImageUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div class="card my-3">
                <div>
                    <span class="badge rounded-pill bg-danger" style={{ display: 'flex', justifyItems: 'flex-end', position: 'absolute', right: '0' }}>{source}</span>
                </div>
                <img src={!ImageUrl ? "https://static.toiimg.com/thumb/msid-107836901,width-1070,height-580,imgsize-54772,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : ImageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}...</h5>
                    <p class="card-text">{description}...</p>
                    <p class="card-text"><small class="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} class="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )

}
export default NewsItem