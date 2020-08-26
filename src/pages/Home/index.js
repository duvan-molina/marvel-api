import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'

const HomePage = () => {
  return (
    <HomeContainer>
      <Card />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export default HomePage
