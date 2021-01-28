import PropTypes from 'prop-types';

import Button from '../button/Button';

import { useLocation } from 'react-router-dom';

const Header = ({ title, toggleForm, showForm }) => {
  const currentLocation = useLocation();

  return (
    <div className='header'>
      <h1
        className={`${
          currentLocation.pathname === '/about' && 'abtHeader'
        } title`}
      >
        {title}
      </h1>
      {currentLocation.pathname === '/' && (
        <Button
          bgColor={showForm ? '#990000' : 'green'}
          txtColor='white'
          text={showForm ? 'Close' : 'Add'}
          onClick={toggleForm}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
