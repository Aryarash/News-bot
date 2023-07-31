import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let {title,description,img_url,newsurl,author, date,source} = this.props;
        return (
            <div>
                <div className="card my-3">
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left:'90%',zIndex:'1'}}>{source}</span>
                    <img src={img_url?img_url:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title+"..."}</h5>
                            <p className="card-text">{description+"..."}</p>
                            <p className='card-text'><small className='text-muted'>Author {!author?'Unknow':author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsurl} target="_blank"  className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
