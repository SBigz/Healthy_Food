import { useState, useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import styled from "styled-components/native";

import Images from "../constants/Images";

const Container = styled.View`
  flex: 1;
  background-color: #e5737d;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px 20px;
`;

const Title = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
`;

const Subtitle = styled.Text`
  font-family: "Rubik-Regular";
  font-size: 16px;
  line-height: 24px;
  width: 200px;
  color: white;
  margin-top: 10px;
`;

const DynamicText = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const Number = styled.Text`
  font-weight: 500;
  font-family: "Rubik-Regular";
  font-size: 32px;
  color: white;
  line-height: 40px;
`;

const Kcal = styled.Text`
  font-size: 16px;
  font-family: "Rubik-Regular";
  line-height: 50px;
  color: white;
`;

const Asset = styled.Image`
  width: 214px;
  height: 214px;
  position: absolute;
  top: 79px;
  left: 180px;
  z-index: -1;
`;

export default function LargeCard({ title, subtitle }) {
  // Pedometer State
  const [currentStepCount, setCurrentStepCount] = useState(0);

  // Pedometer Effect
  useEffect(() => {
    const end = new Date();
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    
    Pedometer.isAvailableAsync().then(
      result => {
        if (result) {
          Pedometer.getStepCountAsync(start, end).then(
            result => {
              setCurrentStepCount(result.steps);
            },
            error => console.log(error)
          );
          
          const subscription = Pedometer.watchStepCount(result => {
            setCurrentStepCount(prevStepCount => prevStepCount + result.steps);
          });

          return () => subscription && subscription.remove();
        }
      },
      error => console.log(error)
    );
  }, []);

  // 0.04 calories per step
  const stepsToCalories = steps => steps * 0.04;
  const caloriesBurned = stepsToCalories(currentStepCount);

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <DynamicText>
        <Number>{caloriesBurned.toFixed(0)}{` `}</Number>
        <Kcal>kcal</Kcal>
      </DynamicText>
      <Asset source={Images.Salad} />
    </Container>
  );
}