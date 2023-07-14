import styled from "styled-components/native";

import Images from "../constants/Images";

const Container = styled.TouchableOpacity`
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
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
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

export default function SmallCard({ img, name, price, rate }) {
  // This function will render the stars based on the rate
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<Star key={i} source={Images.Star} />);
    }
    return stars;
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage source={{ uri: img }} />
        <Rate>{renderStars()}</Rate>
      </ImageContainer>
      <TextContainer>
        <Title>{name}</Title>
        <Price>{price}$</Price>
      </TextContainer>
    </Container>
  );
}
