import styled from "styled-components/native";

import Images from "../constants/Images";

const Container = styled.View`
  background-color: white;
  border-radius: 12px;
  height: 100%;
  width: 143px;
  margin-right: 16px;
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
`;

const Rate = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 6px 5px 0;
`;

const Star = styled.Image`
  width: 16px;
  height: 16px;
  padding-right: 1px;
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
        <Title>Sandwich</Title>
        <Price>120$</Price>
      </TextContainer>
    </Container>
  );
}
