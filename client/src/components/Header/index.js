import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind';
import HamburgerIcon from 'components/HamburgerIcon';
import { ROUTES } from 'utils/routes';
import './styles.less';

@autobind
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = null;
  }

  shouldShowBackBtn(route) {
    switch (route) {
      case ROUTES.VIEW_CATEGORY:
      case ROUTES.CREATE_CATEGORY:
        return true;
      default: 
        return false;
    }
  }

  click() {
    const backRoute = this.shouldShowBackBtn(this.props.route);
    if (backRoute) {
      window.history.back();
      // action.onNext({ name: ACTIONS.BACK_BUTTON, data: backRoute });
    } else {
      this.toggle.click();
    }
  }


  render() {
    const { user, name } = this.props;
    return (
      <header className="main-header">
        <nav className="navbar navbar-static-top" role="navigation" style={{ flex: 1, flexDirections: 'row', display: 'flex', marginLeft: 0 }}>
          <div 
            ref={(res) => { this.toggle = res; }}
            style={{ display: 'none'}}
            data-toggle="offcanvas"
          >
          </div>
          <div className="hamburger">
            <HamburgerIcon
              back={this.shouldShowBackBtn(this.props.route)} 
              onClick={this.click}
            />
          </div>
          <a href="javascript:;" className="logo" style={{ width: '100%' }}>
            <span className="logo-lg"><b>MIORI</b></span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="/lte/dist/img/avatar.png" className="user-image" alt="User Avatar" />
                  <span className="hidden-xs">{user.name}</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="/lte/dist/img/avatar.png" className="img-circle" alt="User Avatar" />
                    <p>
                      {user.name}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.defaultProps = {
  user: { name: '', permissions: [] },
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;