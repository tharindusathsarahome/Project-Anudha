import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <Menu secondary style={{
      margin: '0',
      padding: '0 50px',
      position: 'sticky',
      top: '0',
      zIndex: '1000',
      backgroundColor: 'white',
      borderBottom: '1px solid #ccc'
    }}>
      <Menu.Item header>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>DEV@Deakin</h3>
        </Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        {user ? (
          <div>
            <Input style={{ margin: '10px 10px' }} transparent icon='search' placeholder='Search...' />
            <Link to="/post">
              <Button style={{ margin: '10px 10px' }} >Post</Button>
            </Link>
            <Button style={{ margin: '10px 10px' }} onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button style={{ margin: '10px 10px' }}>Login</Button>
            </Link>
            <Link to="/signup">
              <Button style={{ margin: '10px 10px' }} primary>Sign Up</Button>
            </Link>
          </div>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Header;