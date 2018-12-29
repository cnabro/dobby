import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getList from "../action";
import PostItem from "../item";

class PostList extends Component {
  componentDidMount() {
    const { getListAsync } = this.props;

    getListAsync();
  }

  render() {
    const { list } = this.props;

    return (
      <ul>
        {list.length
          && list.map(post => <PostItem post={post} key={post.id} />)}
      </ul>
    );
  }
}

PostList.defaultProps = {
  list: [],
  getListAsync: () => {},
};

PostList.propTypes = {
  list: PropTypes.instanceOf(Object),
  getListAsync: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  getListAsync: () => dispatch(getList()),
});

const mapStateToProps = ({ postState }) => ({
  list: postState.list,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
