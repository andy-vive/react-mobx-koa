import React from 'react';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import './style.less';
class ContentWrapper extends React.Component {

  componentDidMount() {
    $.AdminLTE.layout.activate(); // eslint-disable-line no-undef
  }

  render() {
    return (
      <div>
        <SideBar />
        <div className="content-wrapper">
          <Header />
            { React.Children.toArray(this.props.children) }
          </div>
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default ContentWrapper;