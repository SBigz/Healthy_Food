import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: white;
  height: 100%;
  width: 143px;
  margin-right: 16px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <Container>
      <ActivityIndicator size="large" color="##D4D4D4" />
    </Container>
  );
}
