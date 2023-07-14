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

export default function Chickens() {
  // Query for chicken data
  const {
    data: chickenData, // Data received from the API
    isLoading: chickenLoading, // Loading state of the API request
    isError: chickenError, // Error state of the API request
  } = useQuery("chickenData", () =>
    fetch("https://free-food-menus-api-two.vercel.app/fried-chicken").then(
      (response) => response.json()
    )
  );

  // Show more items when the user reaches the end of the list
  const [itemsToShow, setItemsToShow] = useState(5);

  // This function will be called when the user reaches the end of the list
  const showMoreItems = () => {
    if (itemsToShow < chickenData.length) {
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
      <Title>Favorite Chicken</Title>
      {chickenLoading && <Loader />}
      {chickenError && <Placeholder />}
      {!chickenLoading && !chickenError && (
        <FlatList
          horizontal
          data={chickenData.slice(0, itemsToShow)}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={showMoreItems}
          onEndReachedThreshold={0.5} // This will trigger the "showMoreItems" function when the end of the list is within half the visible length
          ListFooterComponent={itemsToShow < chickenData.length ? Loader : null} // Show the loader at the end of the list if there are more items to load
        />
      )}
    </>
  );
}
