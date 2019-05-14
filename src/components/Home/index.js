import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../../store/actions';
import { bindActionCreators } from 'redux';

//component
import LatestNews from './LatestNews';

class Home extends Component {
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
  }
  render() {
    //console.log(this.props);
    return (
      <>
        <LatestNews latest={this.props.articles.latest} />
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
