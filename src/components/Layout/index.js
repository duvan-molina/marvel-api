import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutStyled>
        {children}
      </LayoutStyled>
    </>
  )
}

const LayoutStyled = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 50px auto 0;
`

export default Layout
