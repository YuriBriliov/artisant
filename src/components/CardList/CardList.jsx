import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'


const CardListBlock = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function CardList({ items }) {
  return (
    <>
      <CardListBlock>
        {items.map((item) => {
          return (
            <Card
              key={item.product_id}
              image={item}
              name={item.name}
              id={item.product_id}
              price={item.initial_price}
              author={item.created_by.display_name}
            />
          );
        })}
      </CardListBlock>
    </>
  );
}
