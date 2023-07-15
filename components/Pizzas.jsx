import * as React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  // Query for pizza data
  const {
    data: pizzaData, // Data received from the API
    isLoading: pizzaLoading, // Loading state of the API request
    isError: pizzaError, // Error state of the API request
  } = useQuery("pizzaData", () =>
    fetch("https://free-food-menus-api-two.vercel.app/pizzas").then(
      (response) => response.json()
    )
  );

  // Show more items when the user reaches the end of the list
  const [itemsToShow, setItemsToShow] = useState(5);

  // This function will be called when the user reaches the end of the list
  const showMoreItems = () => {
    if (itemsToShow < pizzaData.length) {
      setItemsToShow(itemsToShow + 5);
    }
  };

  const SmallCardMemo = React.memo(SmallCard);
  const renderCard = ({ item, index }) => (
    <SmallCardMemo
      key={index}
      img={item.img}
      name={item.name}
      price={item.price}
      rate={item.rate}
      dsc={item.dsc}
      country={item.country}
      navigation={navigation}
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
          showsHorizontalScrollIndicator={false}
          data={pizzaData.slice(0, itemsToShow)}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={showMoreItems}
          onEndReachedThreshold={0.5} // This will trigger the "showMoreItems" function when the end of the list is within half the visible length
          ListFooterComponent={itemsToShow < pizzaData.length ? Loader : null} // Show the loader at the end of the list if there are more items to load
        />
      )}
    </>
  );
}
