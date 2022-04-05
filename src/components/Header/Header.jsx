import React from 'react'
import styled from 'styled-components'

const MainTitle = styled.h1`
  margin-top: 20px; 
`

const SemiDescription = styled.h3`
  margin-top: 20px; 
`

export default function Header() {
  return (
    <header>
      <MainTitle>
        Explore
      </MainTitle>
      <SemiDescription>
        Buy and sell digital fashion NFT art
      </SemiDescription>
    </header>
  )
}
