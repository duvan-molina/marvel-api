import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useOpen } from '../../context/useIsOpen'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PopUp = () => {
  const { id } = useParams()
  const [character, setCharacter] = React.useState([])

  React.useEffect(() => {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=31260be2bc7380f8b5a7b72012706a93&hash=5aaa7887ae87c22f886dfc36de35825d`)
      .then(response => response.json())
      .then(character => setCharacter(character.data.results))
  }, [id])

  const { isOpen } = useOpen()
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <PopUpStyled>
      <PopUpContent>
        {character.length ? character.map((e) => (
          <div key={e.id}>
            <PopUpHeader>
              <PopUpName>{e.name}</PopUpName>
              <Link to='/'>
                <ButtonClose>x</ButtonClose>
              </Link>
            </PopUpHeader>
            <PopUpBody>
              <PopUpImage>
                <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt={e.name} style={{ width: '100%' }} />
              </PopUpImage>
              <div>
                <p>{e.description.length ? e.description : 'No hay descripción'}</p>
              </div>
            </PopUpBody>
          </div>
        )) : 'Cargando...'}
      </PopUpContent>
    </PopUpStyled >,
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
  overflow-y: auto;
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

const PopUpBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const PopUpImage = styled.div`
  height: 210px;
  width: 210px;
  margin: 10px auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export default PopUp
