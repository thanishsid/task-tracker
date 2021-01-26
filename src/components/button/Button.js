import React from 'react';

import PropTypes from 'prop-types';

const Button = ({ bgColor, txtColor, text }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  bgColor: 'black',
  txtColor: 'white',
};

Button.propTypes = {
  text: PropTypes.string,
  txtColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
