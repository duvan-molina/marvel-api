import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Card = ({ name, image, ...props }) => {
  const [state, setState] = React.useState(false)
  const handleClick = () => setState(!state)

  return (
    <CardStyled image={image} {...props}>
      <Button name="card" state={state} handleClick={handleClick} />
      <NameHero>{name}</NameHero>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  position: relative;
  padding: 27px 23px;
  width: 256px;
  height: 380px;
  margin-bottom: 10px;
  background-image: url(${({ image }) => image});
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
  color: ${ props => props.theme.palette.whiteClassic};
  letter-spacing: -0.25px;
  font-weight: bold;
`

export default Card
