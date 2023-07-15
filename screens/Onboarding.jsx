import { useRef, useEffect } from "react";
import { Animated, Image, View } from "react-native";
import styled from "styled-components/native";

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

const AnimContainer = styled(View)`
  margin-right: 15px;
`;

// Animated Image
const StyledAnim = Animated.createAnimatedComponent(Image);

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
  // Animation Ref
  const animValue = useRef(new Animated.Value(0)).current;

  // Animation Effect
  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Container>
        <StyledImage source={Images.Vector} />
        <TopContainer>
          <Title>Healthy Food</Title>
        </TopContainer>
        <MidContainer>
          <AnimContainer>
            <StyledAnim
              source={Images.Illus}
              style={{
                opacity: animValue,
                transform: [
                  {
                    translateY: animValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-200, 0],
                    }),
                  },
                ],
              }}
            />
          </AnimContainer>
        </MidContainer>
        <BottomContainer>
          <Subtitle>
            Start your day off right with these healthy breakfast recipes
          </Subtitle>
          <Button onPress={() => navigation.navigate("Home")} />
        </BottomContainer>
      </Container>
    </>
  );
}
