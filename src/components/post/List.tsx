import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "src/store/post/post.ducks";
import PostItem from "src/components/post/Item";

type PostType = {
  id: string;
  title: string
};

type Props = {
  getListAsync: () => any;
  list: PostType[]
};

class PostList extends Component<Props> {
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

const mapDispatchToProps = (dispatch: any) => ({
  getListAsync: () => dispatch(getList()),
});

const mapStateToProps = ({ post }: any) => ({
  list: post.list,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
