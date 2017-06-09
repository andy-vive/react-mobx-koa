import React from 'react';
import SideBarMenu from './SideBarMenu';

const SideBar = ({ user }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="/lte/dist/img/avatar.png" className="img-circle" alt="User avatar" />
        </div>
        <div className="pull-left info">
          <p>{user.name}</p>
          <a href="/#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <SideBarMenu />
    </section>
  </aside>
);
SideBar.defaultProps = {
  user: { name: '', permissions: [] },
};

SideBar.propTypes = {
  user: React.PropTypes.object,
};

export default SideBar;