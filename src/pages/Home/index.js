import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { useData } from '../../context/getData'

const HomePage = () => {
  const { data } = useData();

  return (
    <HomeContainer>
      {data.length ? data.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          image={`${e.thumbnail.path}.${e.thumbnail.extension}`}
        />
      )) : 'Cargando'}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default HomePage
