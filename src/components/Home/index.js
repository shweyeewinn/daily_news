import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../../store/actions';
import { bindActionCreators } from 'redux';

//component
import LatestNews from './LatestNews';
import OtherNews from './OtherNews';

class Home extends Component {
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
  }

  render() {
    const articles = this.props.articles;
    console.log(this.props);
    return (
      <>
        <LatestNews latest={articles.latest} />
        <OtherNews otherNews={articles.otherNews} />
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
