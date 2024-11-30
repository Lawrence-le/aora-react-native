// app/(tabs)/index.tsx
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function IndexScreen() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              style={{ width: 120, height: 120, marginBottom: -30 }}
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              // className="mt-4"
              style={{ width: 300, height: 300 }}
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Image
                source={images.path}
                resizeMode="contain"
                className="w-[136px] h-[15px] absolute -bottom-10 -right-2"
                style={{ width: 80, height: 80 }}
              ></Image>
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless{"\n"}
                Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
            </View>
            <Text className="text-sm font-regular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    // <View className="flex-1 justify-center items-center bg-white">
    //   <Text className="text-2xl font-black text-black">
    //     Welcome to the First Page!
    //   </Text>
    //   <Link className="text-blue" href="/home">
    //     Go To Home
    //   </Link>
    // </View>
  );
}
