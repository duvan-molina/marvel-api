import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useOpen } from '../../context/useIsOpen'
import { cropText } from '../../utils'

const PopUp = ({ selectId, setSelectId, name, image, description }) => {
  const [character, setCharacter] = React.useState([])
  const url = `https://gateway.marvel.com/v1/public/characters/${selectId}/comics?ts=1&apikey=31260be2bc7380f8b5a7b72012706a93&hash=5aaa7887ae87c22f886dfc36de35825d`

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(character => setCharacter(character.data.results))
  }, [selectId, url])

  /*   const newArray = character.map((e) => e).sort((a, b) => {
      const dateA = new Date(e.)
    })
  
    console.log(newArray) */

  const handleClick = () => {
    setIsOpen(!isOpen)
    setSelectId()
  }
  const { isOpen, setIsOpen } = useOpen()
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <PopUpStyled>
      <PopUpContent>
        <PopUpHeader>
          <PopUpName>{name}</PopUpName>
          <ButtonClose onClick={handleClick}>x</ButtonClose>
        </PopUpHeader>
        <PopUpBody>
          <PopUpImage>
            <img src={image} alt={name} />
          </PopUpImage>
          <div>
            <PopUpDescription>Descripción</PopUpDescription>
            <p>{description.length ? description : 'Descripción no disponible'}</p>
          </div>
          <div className="comics" style={{ width: '100%' }}>
            <PopUpTitle>Comics</PopUpTitle>
            {character.length ? character.sort((a, b) => {
              const item1 = new Date(a.dates[0].date)
              const item2 = new Date(b.dates[0].date)
              return item1 - item2
            }).map((e) => {
              const image = `${e.thumbnail.path}.${e.thumbnail.extension}`
              return (
                <PopUpContentComic key={e.id}>
                  <PopUpImageComicContainer>
                    <PopUpImageComic src={image} alt={e.title} />
                  </PopUpImageComicContainer>
                  <div>
                    <PopUpComicTitle>{e.title}</PopUpComicTitle>
                    <p>{e.description ? cropText(`${e.description}`, 135) : 'Descripción no disponible'}</p>
                  </div>
                </PopUpContentComic>
              )
            }) : 'Cargando...'}
          </div>
        </PopUpBody>
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
const PopUpTitle = styled.h2`
  text-align: center;
  margin: 10px auto;
`

const PopUpName = styled.h2`
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

const PopUpImageComic = styled.img`
  width: 120px;
  height: 100%;
  border-radius: 5px;
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

const PopUpContentComic = styled.div`
  display: flex;
  height: 130px;
  margin-bottom: 25px;
`

const PopUpImageComicContainer = styled.div`
  /* width: 28%; */
  margin-right: 15px;
`
const PopUpDescription = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`

const PopUpComicTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`

export default PopUp
