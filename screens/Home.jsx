import styled from "styled-components/native";
import { Text } from "react-native";

import Images from "../constants/Images";
import LargeCard from "../components/LargeCard";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const TopContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px 20px 0;
`;

const MidContainer = styled.View`
  flex: 2;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

const BottomUpContainer = styled.View`
  flex: 2;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5%;
  background-color: orange;
`;

const BottomDownContainer = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
  padding-bottom: 5%;
  background-color: grey;
`;

const WelcomeContainer = styled.View`
  flex-direction: row;
`;

const Left = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const Right = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Logo = styled.Image`
  width: 22px;
  height: 22px;
`;

const StyledText = styled.Text`
  justify-content: flex-start;
  font-family: "Rubik-Regular";
  font-size: 16px;
  color: black;
  margin-top: 2px;
  margin-left: 10px;
`;

const Device = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 24px;
  line-height: 50px;
  font-weight: 600;
`;

export default function Home() {
  return (
    <>
      <Container>
        <TopContainer>
          <WelcomeContainer>
            <Left>
              <Logo source={Images.Sunrise} />
              <StyledText>Good Morning</StyledText>
            </Left>
            <Right>
              <Logo source={Images.Bell} />
            </Right>
          </WelcomeContainer>
          <Device>
            <Text>Tyler Durden</Text>
          </Device>
        </TopContainer>
        <MidContainer>
          <LargeCard
            title="Healthy Food"
            subtitle="Keep your healthy life with healthy food"
          />
        </MidContainer>
        <BottomUpContainer></BottomUpContainer>
        <BottomDownContainer></BottomDownContainer>
      </Container>
    </>
  );
}
