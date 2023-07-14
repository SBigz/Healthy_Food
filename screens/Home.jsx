import styled from "styled-components/native";

import Welcome from "../components/Welcome";
import Chickens from "../components/Chickens";
import Pizzas from "../components/Pizzas";
import LargeCard from "../components/LargeCard";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: whitesmoke;
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
  padding: 0 20px 20px 20px;
`;

const BottomDownContainer = styled.View`
  flex: 2;
  width: 100%;
  padding: 0 20px 20px 20px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <TopContainer>
          <Welcome />
        </TopContainer>
        <MidContainer>
          <LargeCard
            title="Healthy Food"
            subtitle="Keep your healthy life with healthy food"
          />
        </MidContainer>
        <BottomUpContainer>
          <Chickens />
        </BottomUpContainer>
        <BottomDownContainer>
          <Pizzas />
        </BottomDownContainer>
      </Container>
    </>
  );
}
