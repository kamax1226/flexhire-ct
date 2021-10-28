import React, { useState, useCallback } from 'react';
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from 'app/hooks/useAuth';
import logoUrl from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { logout } = useAuth();

  const [menu, setMenu] = useState(null);

  const handleMenuOpen = useCallback((event) => {
    setMenu(event.currentTarget);
  }, [setMenu]);

  const handleMenuClose = useCallback(() => {
    setMenu(null);
  }, [setMenu]);

  const handleRoute = useCallback((path: string) => {
    setMenu(null);
    history.push(path);
  }, [history]);

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <div className="header-container">
      <div className="d-flex align-items-center">
        <div>
          <Link to="/">
            <img className="logo" src={logoUrl} alt="Logo" />
          </Link>
        </div>
        <div className="header-link-items">
          <Link to="/" className="link-dashboard">Dashboard</Link>
          <Link to="/jobs" className="link-jobs">Jobs</Link>
          <Link to="/profile" className="link-profile">Profile</Link>
        </div>
      </div>
      <div>
        <Avatar alt="Remy Sharp" className="avatar-image" onClick={handleMenuOpen} />
        <Menu
          className="user-avatar-menu"
          id="simple-menu"
          anchorEl={menu}
          open={Boolean(menu)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleRoute('/Jobs')}>Jobs</MenuItem>
          <MenuItem onClick={() => handleRoute('/profile')}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
