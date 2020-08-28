import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { useData } from '../../context/getData'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { data } = useData();
  return (
    <HomeContainer>
      {data.length ? data.map((e) => (
        <Link to={`/character/${e.id}`} key={e.id}>
          <Card
            // onClick={handleOpenModal}
            name={e.name}
            image={`${e.thumbnail.path}.${e.thumbnail.extension}`}
          />
        </Link>
      )) : 'Cargando'}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default HomePage
