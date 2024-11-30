import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  // name: string;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
      {/* <Text
        className={`text-xs ${focused ? "font-regular" : "font-normal"}`}
        style={{ color }}
      >
        {name}
      </Text> */}
    </View>
  );
};

const TabsLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 0,
          borderTopColor: "#232533",
          height: 64,
          justifyContent: "space-between",
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          // fontSize: 10,
          fontWeight: "regular",
          // color: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              // name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              // name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              // name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              // name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
