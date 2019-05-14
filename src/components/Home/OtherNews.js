import React from 'react';
import { Link } from 'react-router-dom';

const renderOtherNews = ({ otherNews }) =>
  otherNews
    ? otherNews.map(item => (
        <Link to={`/article/${item.id}`} key={item.id} className="item">
          <div
            className="left"
            style={{
              background: `url(/images/articles/${item.img})`
            }}
          />
          <div className="right">
            <h3>{item.title}</h3>
            <div className="category-tag">{item.category}</div>
            <div className="tags">
              <span>
                <i className="fa fa-eye">{item.views}</i>
              </span>
              <span>
                <i className="fa fa-thumbs-up">{item.likes[0]}</i>
              </span>
              <span>
                <i className="fa fa-thumbs-down">{item.likes[1]}</i>
              </span>
            </div>
          </div>
        </Link>
      ))
    : null;
const OtherNews = props => (
  <div className="other-news">
    <h2>Other news</h2>
    <div className="other-news-items">{renderOtherNews(props)}</div>
  </div>
);

export default OtherNews;
