import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import React from "react";

interface Item {
  $id: string;
  id: number;
}

interface TrendingProps {
  posts: Item[];
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }: ListRenderItemInfo<Item>) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
