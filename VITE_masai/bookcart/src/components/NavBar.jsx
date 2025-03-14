import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../ContextAPI/AuthContext';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { isLogged, logout } = useContext(AuthContext);
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout(navigate);
  };
  
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#f0f0f0' }}>
      <div>
        <Link to="/home" style={{ marginRight: '15px' }}>Home</Link>
        {isLogged && <Link to="/cart" style={{ marginRight: '15px' }}>Cart ({cart.length})</Link>}
      </div>
      <div>
        {isLogged ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
