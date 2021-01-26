import PropTypes from 'prop-types';

import Button from '../button/Button';

const Header = ({ title, toggleForm, showForm }) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <Button
        bgColor={showForm ? '#990000' : 'green'}
        txtColor='white'
        text={showForm ? 'Close' : 'Add'}
        onClick={toggleForm}
      />
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
