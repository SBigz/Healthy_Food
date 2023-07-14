import styled from "styled-components/native";
import { Image } from "react-native";

import Images from "../constants/Images";
import Button from "../components/Button";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const TopContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-top: 10%;
`;

const MidContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5%;
`;

const BottomContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-bottom: 5%;
`;

const StyledImage = styled(Image)`
  position: absolute;
`;

const StyledAnim = styled(Image)`
  margin-right: 15px;
`;

const Title = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 30px;
  color: white;
`;

const Subtitle = styled.Text`
  font-family: "Rubik-Regular";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: #d4d4d4;
  margin-bottom: 10%;
`;

export default function Onboarding({ navigation }) {
  return (
    <>
      <Container>
        <StyledImage source={Images.Vector} />
        <TopContainer>
          <Title>Healthy Food</Title>
        </TopContainer>
        <MidContainer>
          <StyledAnim source={Images.Illus} />
        </MidContainer>
        <BottomContainer>
          <Subtitle>
            Start your day off right with these healthy breakfast recipes
          </Subtitle>
          <Button 
            onPress={() => navigation.navigate("Home")}
          />
        </BottomContainer>
      </Container>
    </>
  );
}
