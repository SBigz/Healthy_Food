import * as React from "react";
import styled from "styled-components/native";

import Images from "../constants/Images";
import Welcome from "../components/Welcome";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: whitesmoke;
`;

const TopContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px 20px 6px;
`;

const MidContainer = styled.View`
  flex: 3;
  width: 100%;
  justify-content: center;
  padding: 0 20px 20px 20px;
`;

const BottomContainer = styled.View`
  flex: 2;
  width: 100%;
  padding: 0 20px 20px 20px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  margin-bottom: 50px;
`;

const Title = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
  color: black;
  text-align: left;
  margin-bottom: 12px;
`;

const SubtitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Price = styled.Text`
  font-family: "Rubik-Regular";
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  color: #d4d4d4;
  text-align: left;
  margin-bottom: 12px;
`;

const Rate = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Star = styled.Image`
  width: 16px;
  height: 16px;
  padding-right: 1px;
`;

const Description = styled.Text`
  font-family: "Rubik-Regular";
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: black;
  text-align: left;
  margin-bottom: 15px;
`;

const CountryContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

const Country = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #d4d4d4;
`;

export default function FoodScreen({ route }) {
  const { img, name, price, rate, dsc, country } = route.params;

  // This function will render the stars based on the rate
  const renderStars = React.useMemo(() => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<Star key={i} source={Images.Star} />);
    }
    return stars;
  }, [rate]);

  return (
    <>
      <Container>
        <TopContainer>
          <Welcome />
        </TopContainer>
        <MidContainer>
          <StyledImage source={{ uri: img }} />
        </MidContainer>
        <BottomContainer>
          <Title>{name}</Title>
          <SubtitleContainer>
            <Price>{price} $</Price>
            <Rate>{renderStars}</Rate>
          </SubtitleContainer>
          <Description>{dsc}</Description>
          <CountryContainer>
            <Country>📍 {country}</Country>
          </CountryContainer>
        </BottomContainer>
      </Container>
    </>
  );
}
