import React from 'react'
import logo from '../../images/logo.svg'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import TextField from '../Field'

library.add(fasFaStar, farFaStar)

const Navbar = () => {
  const [state, setState] = React.useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <NavbarStyled>
      <NavbarContainer>
        <NavbarContent>
          <NavbarLogo>
            <figure>
              <img src={logo} alt=' Logo de marvel' />
            </figure>
          </NavbarLogo>
          <NavbarContainerItems>
            <Divider />
            <NavbarActions>
              <TextField placeholder='Buscar' onChange={() => console.log('hello world')} />
              <ButtonFavorite>
                <FontAwesomeIcon icon={!state ? farFaStar : fasFaStar} onClick={handleClick} />
              </ButtonFavorite>
            </NavbarActions>
            <Divider />
          </NavbarContainerItems>
        </NavbarContent>
      </NavbarContainer>
    </NavbarStyled >
  )
}

const NavbarStyled = styled.div`
  background-color: ${props => props.theme.palette.whiteClassic};
  height: 50px;
`
const NavbarContainer = styled.div`
  padding: 7px 13px;
  display: flex;
  align-items: center;
  height: 100%;
`
const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const NavbarLogo = styled.div`
  width: 80px;
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
`
const NavbarContainerItems = styled.div`
  padding: 0 20px;
  display: flex; 
  align-items: center; 
  width: 100%;
`

const Divider = styled.div`
  height: 25px;
  border-left: 1px solid rgba(168, 168, 168, .3);
`

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`
const ButtonFavorite = styled.div`
  svg {
    color: ${props => props.theme.palette.gray};
    cursor: pointer;
  }
`
export default Navbar
