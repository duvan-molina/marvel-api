import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const PopUp = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <PopUpStyled>
      <PopUpContent>
        <PopUpHeader>
          <PopUpName>spider-man</PopUpName>
          <ButtonClose>x</ButtonClose>
        </PopUpHeader>
      </PopUpContent>
    </PopUpStyled>,
    document.getElementById('popUp')
  )
}

const PopUpStyled = styled.div`
  position: fixed;
  top: 66px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const PopUpContent = styled.div`
  background-color: ${({ theme }) => theme.palette.whiteClassic};
  width: 437px;
  height: 438px;
  border-radius: 5px;
  padding: 20px 15px 0;
`
const PopUpHeader = styled.div`
  position: relative;
  display: flex;
  align-items: 'center';
`

const PopUpName = styled.div`
  color: ${({ theme }) => theme.palette.colorFont};
  font-size: 25px;
  font-weight: bold;
`

const ButtonClose = styled.button`
  position: absolute;
  top: -5px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.colorFont};
`

export default PopUp
