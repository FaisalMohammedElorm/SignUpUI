import { View, Text, StyleSheet, TouchableOpacity, TextInput , Image} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="flex">
        <View className="flex-row justify-start p-5">
          {/* Arrow Function */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-sky-300 p-2 rounded-tr-2xl rounded-bl-2xl mt-5"
          >
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
        </View>
        {/* Moon Image */}
        <View className="flex-row justify-center aspect-square h-[300] ml-[60]">
          <LottieView className="flex-1" source={require('../assets/Moon.json')} autoPlay loop />
        </View>
      </View>
      <View 
        className="flex-1 bg-sky-500 px-8 pt-8"
        style={{
          borderTopLeftRadius: 50, 
          borderTopRightRadius:50,
        }}
        >
          {/* Input Field */}
          <View className="form space-y-3">
            <Text 
              className="text-blue-900 ml-4 text-xl font-semibold"
            >
              Email Address
            </Text>
            <TextInput
              className="p-4 bg-blue-600 rounded-2xl"
              value="faisal@gmail.com"
              placeholder="Enter Email"
            />
            <Text 
              className="text-blue-900 ml-4 text-xl font-semibold"
            >
              Password
            </Text>
            <TextInput
              className="p-4 bg-blue-600 rounded-2xl"
              value="test1234"
              placeholder="Enter Password"
              secureTextEntry
            />
            <TouchableOpacity 
              className="flex items-end mb-3"
            >
              <Text className="text-blue-700 font-semibold">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-3 bg-indigo-500 rounded-2xl"
            >
              <Text 
                className="text-center font-bold text-2xl text-sky-400"
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* Alternative Text */}
          <Text
            className="text-2xl text-blue-600 font-bold text-center py-4"
          >
              Or
          </Text>
          {/* Social Media Handles */}
          <View className="flex-row justify-center space-x-14">
            <TouchableOpacity
              className="p-2 bg-blue-500 rounded-2xl"
            >
              <Image source={require("../assets/Google.png")}
                className="w-10 h-10"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 bg-blue-500 rounded-2xl"
            >
              <AntDesign name="apple1" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 bg-blue-500 rounded-2xl"
            >
              <Image source={require("../assets/FaceBook.png")}
                className="w-10 h-10"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-center mt-5">
            <Text 
              className="font-semibold"
            >
            Don't have an account?
            </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("Sign Up")}
              >
                <Text 
                  className="font-bold text-blue-700"
                > 
                  Sign Up 
                </Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  
});
export default LoginScreen

        

