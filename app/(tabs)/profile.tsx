// app/(tabs)/index.tsx
import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-800">
      <Text className="text-2xl font- text-white">PROFILE</Text>
      <Link className="text-white" href="/">
        Back to Index
      </Link>
    </View>
  );
}
