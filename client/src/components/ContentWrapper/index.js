import React from 'react';

import './style.less';
class ContentWrapper extends React.Component {

  componentDidMount() {
    $.AdminLTE.layout.activate(); // eslint-disable-line no-undef
  }

  render() {
    return (
      <div className="content-wrapper">
        { React.Children.toArray(this.props.children) }
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default ContentWrapper;