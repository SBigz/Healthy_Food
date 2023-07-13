import styled from "styled-components/native";
import { View, Text } from "react-native";

import Images from "../constants/Images";

const Container = styled.View`
  flex: 1;
  background-color: white;
  border-radius: 12px;
  height: 100%;
  margin: 0 5px;
`;

const ImageContainer = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #d4d4d4;
`;

const TextContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 8px 8px;
`;

const Title = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: black;
`;

const Price = styled.Text`
  font-family: "Rubik-Regular";
  font-size: 14px;
  line-height: 24px;
  color: #d4d4d4;
  margin-top: 5px;
`;

const Rate = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const Star = styled.Image`
  width: 16px;
  height: 16px;
`;

export default function SmallCard() {
  return (
    <Container>
      <ImageContainer>
        <Rate>
          <Star source={Images.Star} />
        </Rate>
      </ImageContainer>
      <TextContainer>
        <Title>SmallCard</Title>
        <Price>SmallCard</Price>
      </TextContainer>
    </Container>
  );
}
