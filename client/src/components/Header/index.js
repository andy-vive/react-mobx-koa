import React from 'react';

const Header = ({ user }) => (
  <header className="main-header">

    <nav className="navbar navbar-static-top" role="navigation" style={{ flex: 1, flexDirections: 'row', display: 'flex', marginLeft: 0 }}>
      <a href="/#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <a href="#/" className="logo" style={{ width: '100%' }}>
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

Header.defaultProps = {
  user: { name: '', permissions: [] },
};

Header.propTypes = {
  user: React.PropTypes.object,
};

export default Header;