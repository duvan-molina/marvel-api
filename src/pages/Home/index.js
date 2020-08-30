import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { useData } from '../../context/getData'
import { useOpen } from '../../context/useIsOpen'
import PopUp from '../../components/PopUp'

const HomePage = () => {
  const { data } = useData();
  const { isOpen, setIsOpen } = useOpen();
  const [selectId, setSelectId] = React.useState()

  const handleClick = id => {
    setSelectId(id)
    setIsOpen(!isOpen)
  }

  return (
    <HomeContainer>
      {data.length ? data.map((e) => {
        const image = `${e.thumbnail.path}.${e.thumbnail.extension}`
        return (
          <div key={e.id}>
            <Card
              onClick={() => handleClick(e.id)}
              name={e.name}
              image={image}
            />
            {selectId === e.id &&
              <PopUp
                name={e.name}
                image={image}
                description={e.description}
                selectId={selectId}
                setSelectId={setSelectId}
              />
            }
          </div>
        )
      }) : 'Cargando'}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default HomePage
