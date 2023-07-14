import { useState } from "react";
import { useQuery } from "react-query";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import SmallCard from "./SmallCard";
import Loader from "./Loader";
import Placeholder from "./PlaceholderCard";

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
  // Query for pizza data
  const {
    data: pizzaData,
    isLoading: pizzaLoading,
    isError: pizzaError,
  } = useQuery("pizzaData", () =>
    fetch("https://free-food-menus-api-two.vercel.app/pizzas").then(
      (response) => response.json()
    )
  );

  const [itemsToShow, setItemsToShow] = useState(5);

  const showMoreItems = () => {
    if (itemsToShow < pizzaData.length) {
      setItemsToShow(itemsToShow + 5);
    }
  };

  const renderCard = ({ item, index }) => (
    <SmallCard
      key={index}
      img={item.img}
      name={item.name}
      price={item.price}
      rate={item.rate}
    />
  );

  return (
    <>
      <Title>Favorite Pizzas</Title>
      {pizzaLoading && <Loader />}
      {pizzaError && <Placeholder />}
      {!pizzaLoading && !pizzaError && (
        <FlatList
          horizontal
          data={pizzaData.slice(0, itemsToShow)}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={showMoreItems}
          onEndReachedThreshold={0.5}
          ListFooterComponent={itemsToShow < pizzaData.length ? Loader : null}
        />
      )}
    </>
  );
}
