import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class PostItem extends PureComponent {
  render() {
    const { post } = this.props;

    return (
      <li>
        {post.title}
      </li>
    );
  }
}

PostItem.defaultProps = {
  post: {},
};

PostItem.propTypes = {
  post: PropTypes.instanceOf(Object),
};

export default PostItem;
