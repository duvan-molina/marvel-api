import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const TextField = ({ onChange, placeholder }) => {
  return (
    <>
      <InputText>
        <input type='text' placeholder={placeholder} onChange={onChange} />
        <FontAwesomeIcon icon={faSearch} />
      </InputText>
    </>
  )
}

const InputText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    position: absolute;
    font-size: 15px;
    color: ${props => props.theme.palette.gray};
  }
  input[type=text]{
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
    padding-left: 30px;
    font-size: 15px;
    color: ${props => props.theme.palette.darkGray};
  }
`
TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default TextField
