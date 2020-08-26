import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Card = () => {
  const [state, setState] = React.useState(false)
  const handleClick = () => setState(!state)

  return (
    <CardStyled>
      <Button name="card" state={state} handleClick={handleClick} />
      <NameHero>3D MAN</NameHero>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  position: relative;
  padding: 27px 23px;
  width: 256px;
  height: 380px;
  background-image: url('https://www.muycomputer.com/wp-content/uploads/2019/08/spider-man-homecoming-tom-holland13-crop.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  svg {
    position: absolute;
    top: 10px;
    right: 23px;
  }
`
const NameHero = styled.h2`
  position: absolute;
  bottom: 23px;
  font-size: 19px;
  color: ${props => props.theme.palette.whiteClassic};
  letter-spacing: -0.25px;
  font-weight: bold;
`

export default Card
