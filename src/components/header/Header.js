import PropTypes from 'prop-types';

import Button from '../button/Button';

const Header = ({ title }) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
      <Button bgColor='green' txtColor='white' text='Add' />
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
