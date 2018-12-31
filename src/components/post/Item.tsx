import React, { PureComponent } from "react";

type Props = {
  post: {
    title: string
  }
};

class PostItem extends PureComponent<Props> {
  render() {
    const { post } = this.props;

    return (
      <li>
        {post.title}
      </li>
    );
  }
}

export default PostItem;
