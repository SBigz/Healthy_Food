import React from "react";
import styled from "styled-components/native";

import Images from "../constants/Images";

const Container = styled.View`
  background-color: white;
  border-radius: 12px;
  width: 143px;
  height: 145px;
  margin-right: 16px;
  box-shadow: 4px 2px 3px rgba(0, 0, 0, 0.3);
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
