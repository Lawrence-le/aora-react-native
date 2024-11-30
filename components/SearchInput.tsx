import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

interface FormFieldProps {
  title?: string;
  value?: string;
  placeholder: string;
  handleChangeText?: (e: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const SearchInput: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl items-center flex-row focus:border-secondary  ">
      <TextInput
        className="flex-1 text-white font-semibold"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
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
