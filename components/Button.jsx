import styled from 'styled-components/native';
import { TouchableOpacity, Text } from "react-native";
import React from "react";

const StyledButton = styled(TouchableOpacity)`
  background-color: #E5737D;
  width: 327px;
  height: 52px;
  padding: 12px 0px;
  border-radius: 12px;
`;

const StyledText = styled(Text)`
font-size: 18px;
  color: white;
  text-align: center;
  `;

export default function Button({ onPress }) {
  return (
    <StyledButton
      onPress={onPress}
    >
      <StyledText style={{ fontFamily: "Rubik-SemiBold", fontSize: 20 }}>
        Get Started 🍴
      </StyledText>
    </StyledButton>
  );
}
