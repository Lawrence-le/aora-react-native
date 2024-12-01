import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

interface FormFieldProps {
  placeholder: string;
  initialQuery: string;
}

const SearchInput: React.FC<FormFieldProps> = ({
  initialQuery,
  placeholder,
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row focus:border-secondary  ">
      <TextInput
        className="flex-1 text-white font-semibold"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          //   className="w-6 h-6"
          style={{ width: 20, height: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
