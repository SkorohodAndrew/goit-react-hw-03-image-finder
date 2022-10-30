import React from 'react';
import { ButtonLM } from './ButtonStyled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <>
      <ButtonLM onClick={() => onClick()}>Button</ButtonLM>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
