import React from "react";
import styled from "styled-components/native";

import Images from "../constants/Images";

const Container = styled.View`
  background-color: white;
  height: 100%;
  width: 143px;
  margin-right: 16px;
  border-radius: 12px;
`;

const ImageContainer = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const TextContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 8px 8px;
`;

const PlaceholderImage = styled.Image`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  height: 100%;
`;

const PlaceholderText = styled.Text`
  color: #d4d4d4;
`;

export default function PlaceholderCard() {
  return (
    <Container>
      <ImageContainer>
        <PlaceholderImage source={Images.PlaceholderImage} />
      </ImageContainer>
      <TextContainer>
        <PlaceholderText>Error loading data</PlaceholderText>
      </TextContainer>
    </Container>
  );
}
