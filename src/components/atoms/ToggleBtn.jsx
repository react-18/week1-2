import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ToggleBtn({ size }) {
  return <ToggleButton type="checkbox" size={size} />;
}

const ToggleButton = styled.input`
    width:${({ size }) => 53 * ((10 + size) / 10)}px;
    height:${({ size }) => 20 * ((10 + size) / 10)}px;
    -webkit-appearance:none;
    outline:none;
    border-radius: 20px;
    background: rgb(158,158,158);
    transition: .2s;
    &:checked{
        background: rgb(173,171,227);
        ::before{
            left: ${({ size }) => 32 * ((10 + size) / 10)}px;
            background:rgb(38,34,181);
        }
    }
    ::before{
        content: '';   
        position:absolute;
        width: ${({ size }) => 20 * ((10 + size) / 10)}px;
        height:${({ size }) => 20 * ((10 + size) / 10)}px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: rgb(250,250,250);
        transform: scale(1.7);
        box-shadow: 0 2px 5px rgb(0,0,0,.2);
        transition: .2s;
    }    
`;

ToggleBtn.propTypes = {
  size: PropTypes.number,
};

ToggleBtn.defaultProps = {
  size: 1,
};

export default ToggleBtn;