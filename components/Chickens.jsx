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

export default function Chickens() {
  // Query for chicken data with infinite pagination
  const {
    data: chickenData,
    isLoading: chickenLoading,
    isError: chickenError,
    fetchNextPage: fetchNextChickenPage,
    hasNextPage: hasChickenNextPage,
  } = useInfiniteQuery("chickenData", ({ pageParam = 1 }) =>
    fetch(
      `https://free-food-menus-api-production.up.railway.app/fried-chicken?_limit=5&_page=${pageParam}`
    ).then((response) => response.json())
  );

  // handleChickenScroll function for infinite pagination
  const handleChickenScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached =
      layoutMeasurement.width + contentOffset.x >= contentSize.width;

    if (isEndReached && hasChickenNextPage) {
      fetchNextChickenPage();
    }
  };

  return (
    <>
      <Title>Favorite Chicken</Title>
      <CardContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleChickenScroll}
        scrollEventThrottle={16}
      >
        {chickenLoading && <Loader />}
        {chickenError && <Placeholder />}
        {!chickenLoading &&
          !chickenError &&
          chickenData.pages.map((page, index) =>
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
