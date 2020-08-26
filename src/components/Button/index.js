import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasFaStar, farFaStar)

const Button = ({ name, state, handleClick }) => {

  const color = {
    header: {
      color: '#A8A8A8'
    },
    card: {
      color: '#FFFFFF'
    }
  }

  return (
    <>
      <ButtonStyled color={color[name]}>
        <FontAwesomeIcon icon={!state ? farFaStar : fasFaStar} onClick={handleClick} />
      </ButtonStyled>
    </>
  )
}

const ButtonStyled = styled.div`
  svg {
    color: ${({ color }) => color.color};
    cursor: pointer;
  }
`

Button.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button
