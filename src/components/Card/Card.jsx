import React from "react";
import styled from "styled-components";

const CardBlock = styled.li`
  height: 482px;
  width: 325px;
  border-radius: 10px;
  box-shadow: 1px 7px 8px 0px rgba(34, 60, 80, 0.1);
  margin: 15px 0; 
`;

const CardContent = styled.div`
  height: 80px;
  width: 325px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  height: 400px;
  width: 325px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  background-image: url("https://cdn.artisant.io/api/files/321_baa4f4c2-3767-4eca-b14e-548e96548ed7.webp");

  background-size: cover;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AuthorDescription = styled.p`
  font-size: 12px;
`;

const AuthorName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
`;

const AuthorBlock = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const CardName = styled.p`
  font-size: 17px;
  max-width: 50%;
`;

const AvaliableTitle = styled.p`
  font-size: 12px;
  color: #808080;
`;

const PriceTitle = styled.p`
  font-size: 12px;
  text-align: right;
  color: #808080;
`;
const LeftSide = styled.div`
  text-align: left;
`;
const RightSide = styled.div`
  text-align: right;
`;

const Avaliable = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
`;
const Price = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
  text-align: right;
  color: #0040e5;
`;

export default function Card({image, author, name, id, price}) {
  return (
    <>
      <CardBlock id={id}>
        <ImageContainer images={image.additional_photos}>
          <AuthorBlock>
            <AuthorDescription>created by</AuthorDescription>
            <AuthorName>{author}</AuthorName>
          </AuthorBlock>
          <CardName>{name}</CardName>
        </ImageContainer>
        <CardContent>
          <LeftSide>
            <AvaliableTitle>avaliable</AvaliableTitle>
            <Avaliable>1 of 50</Avaliable>
          </LeftSide>
          <RightSide>
            <PriceTitle>price</PriceTitle>
            <Price>{price} ETH</Price>
          </RightSide>
        </CardContent>
      </CardBlock>
    </>
  );
}
