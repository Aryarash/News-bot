import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Loading } from './Loading';
import { BrowserRouter as Router } from 'react-router-dom';


export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 5,
    category : 'general'
  }

  capitalise = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalise(this.props.category)}-NewsBot`; 
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ac2eaacfe614b498bdb8e34593fe140&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({article : parsedata.articles,totalResults : parsedata.totalResults,loading:false});
  }
  async componentDidMount(){
    this.updateNews();
  }

  handlePreviousClick = async ()=>{
    this.setState({page:this.state.page-1});
    this.updateNews();
  }
  handleNextClick = async ()=>{
    this.setState({page:this.state.page+1});
    this.updateNews();
  }
  render() {
    return (
      <div>
        <Router>
          <div className='container my-3 '>
            <h2 className='text-center my-5'>{`NewsBot - Latest ${this.props.category==='general'?'':this.capitalise(this.props.category)} Headlines`}</h2>
            {this.state.loading && <Loading/>}
            <div className="row">
              {!this.state.loading && this.state.article.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItems source={element.source.name} author={element.author} date={element.publishedAt}title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 90):""} img_url={element.urlToImage} newsurl={element.url} />
                </div>
              })}
            </div>
            <div className="container d-flex justify-content-between my-5">
              <button disabled={this.state.page<=1}  type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&laquo;Previous</button>
              <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next&raquo;</button>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default News
