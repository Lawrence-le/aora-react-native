import { ScrollView, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn, logout } from "@/lib/appwrite";

interface FormState {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [form, setform] = useState<FormState>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setIsSubmitting(true);
    try {
      const result = await signIn(form);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SignOut = async () => {
    await logout();
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            // className="w-[115px] h-[35px]"
            style={{ width: 100, height: 100 }}
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-semibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder="Enter Your Email Address"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter Password"
            handleChangeText={(e: string) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles="text-black"
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-regular">
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-semibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
          <CustomButton
            title="Logout"
            handlePress={SignOut}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles="text-black"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
