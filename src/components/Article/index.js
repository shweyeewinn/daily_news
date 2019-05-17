import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getArticleData,
  handleArticleLikes,
  clearArticleData
} from '../../store/actions';
import { bindActionCreators } from 'redux';

//components
import LikesCounter from './likes';

class Article extends Component {
  componentDidMount() {
    //console.log(this.props.match.params.id);
    this.props.getArticleData(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArticleData();
  }
  addLike = action => {
    //console.log(action);
    const id = this.props.match.params.id;
    const data = this.props.articles.articleData[0];

    const likes = data.likes[0];
    const dislikes = data.likes[1];

    const newLikes =
      action === 'ADD' ? [likes + 1, dislikes] : [likes, dislikes + 1];

    console.log(id, data, likes, dislikes, newLikes);

    //go to dispatch
    this.props.handleArticleLikes(newLikes, id);
  };

  renderNews = ({ articleData }) =>
    articleData ? (
      <div>
        <div className="tags">
          <span>
            <i className="fa fa-eye">{articleData[0].views}</i>
          </span>
          <span>
            <i className="fa fa-thumbs-up">{articleData[0].likes[0]}</i>
          </span>
          <span>
            <i className="fa fa-thumbs-down">{articleData[0].likes[1]}</i>
          </span>
        </div>
        <div className="top">
          <h2>{articleData[0].title}</h2>
          <span>
            Article by: <strong>{articleData[0].author}</strong>
          </span>
        </div>
        <img
          alt={articleData[0].title}
          src={`/images/articles/${articleData[0].img}`}
        />
        <div className="body_news">{articleData[0].body}</div>
        <div>
          <LikesCounter
            //sending arguments from child component to parent component
            addLike={args => this.addLike(args)}
            likes={articleData[0].likes[0]}
            dislikes={articleData[0].likes[1]}
          />
        </div>
      </div>
    ) : null;

  render() {
    console.log(this.props);
    return (
      <div className="news_container">
        {this.renderNews(this.props.articles)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getArticleData, handleArticleLikes, clearArticleData },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
