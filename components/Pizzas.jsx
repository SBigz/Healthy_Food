import { useInfiniteQuery } from "react-query";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import SmallCard from "./SmallCard";
import Loader from "./Loader";
import Placeholder from "./PlaceholderCard";

const CardContainer = styled(ScrollView)`
  flex-direction: row;
`;

const Title = styled.Text`
  font-family: "Rubik-SemiBold";
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: black;
  text-align: left;
  margin-bottom: 12px;
`;

export default function Pizzas() {
  // Query for pizza data with infinite pagination
  const {
    data: pizzaData,
    isLoading: pizzaLoading,
    isError: pizzaError,
    fetchNextPage: fetchNextPizzaPage,
    hasNextPage: hasPizzaNextPage,
  } = useInfiniteQuery("pizzaData", ({ pageParam = 1 }) =>
    fetch(
      `https://free-food-menus-api-production.up.railway.app/pizzas?_limit=5&_page=${pageParam}`
    ).then((response) => response.json())
  );

  // handlePizzaScroll function for infinite pagination
  const handlePizzaScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.width + contentOffset.x >= contentSize.width;

    if (isEndReached && hasPizzaNextPage) {
      fetchNextPizzaPage();
    }
  };

  return (
    <>
      <Title>Favorite Pizzas</Title>
      <CardContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handlePizzaScroll}
        scrollEventThrottle={16}
      >
        {pizzaLoading && <Loader />}
        {pizzaError && <Placeholder />}
        {!pizzaLoading &&
          !pizzaError &&
          pizzaData.pages.map((page, index) =>
            page.map((data) => (
              <SmallCard
                key={index}
                img={data.img}
                name={data.name}
                price={data.price}
                rate={data.rate}
              />
            ))
          )}
      </CardContainer>
    </>
  );
}
