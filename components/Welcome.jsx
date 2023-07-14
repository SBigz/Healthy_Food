import { useState, useEffect } from "react";
import * as Device from "expo-device";
import styled from "styled-components/native";

import Images from "../constants/Images";

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
  margin-right: 4px;
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

const DeviceName = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 24px;
  line-height: 50px;
  font-weight: 600;
`;

export default function Welcome() {
  // Get device name
  const deviceName = Device.modelName;

  // Get current time
  const [currentPeriod, setCurrentPeriod] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    let period = "Good morning";

    if (hour >= 10 && hour < 22) {
      period = "Good day";
    } else if (hour >= 22 || hour < 8) {
      period = "Good night";
    }

    setCurrentPeriod(period);
  }, []);

  return (
    <>
      <WelcomeContainer>
        <Left>
          <Logo
            source={
              currentPeriod === "Good night"
                ? Images.Moon
                : currentPeriod === "Good day"
                ? Images.Sun
                : Images.Sunrise
            }
          />
          <StyledText>{currentPeriod}</StyledText>
        </Left>
        <Right>
          <Logo source={Images.Bell} />
        </Right>
      </WelcomeContainer>
      <DeviceName>
        {deviceName} 📲
      </DeviceName>
    </>
  );
}
