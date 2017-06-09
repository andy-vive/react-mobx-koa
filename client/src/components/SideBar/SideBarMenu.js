import React from 'react';
import { Link, IndexLink } from 'react-router';

const SideBarMenu = () => (
  <ul className="sidebar-menu">
    <MenuItem index to="/">
      <i className="fa fa-dashboard"></i> <span>Dashboard</span>
    </MenuItem>
    <MenuItem index to="/categories">
      <i className="fa fa-dashboard"></i> <span>Category</span>
    </MenuItem>
  </ul>
);

const MenuItem = (props, context) => {
  const { router } = context;
  const { index, onlyActiveOnIndex, to, children } = props;
  const isActive = router.isActive(to, onlyActiveOnIndex);
  const LinkComponent = index ? Link : IndexLink;

  return (
    <li className={isActive ? 'active' : ''}>
      <LinkComponent to={to}>{children}</LinkComponent>
    </li>
  );
};

MenuItem.propTypes = {
  index: React.PropTypes.any,
  onlyActiveOnIndex: React.PropTypes.any,
  to: React.PropTypes.string,
  children: React.PropTypes.node,
};

MenuItem.contextTypes = { router: React.PropTypes.object };

export default SideBarMenu;