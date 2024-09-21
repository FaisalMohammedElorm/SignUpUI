import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1" style={{backgroundColor: "whitesmoke"}}>
      <View className="flex flex-1 justify-around my-4">
        {/* Welcome Text */}
        <Text 
          className="font-bold text-4xl text-center">
          Let's Get Started!
          </Text>
          {/* Welcome Motion Image */}
          <View className="aspect-square h-[300] flex-row justify-center ml-[60]">
            <LottieView className="flex-1"  source={require('../assets/Welcome .json')} autoPlay loop />
          </View>
          <View className="space-y-6">
            <TouchableOpacity 
              onPress={() => navigation.navigate("Sign Up")}
              className="py-3 bg-slate-600 mx-7 rounded-xl"
              >
              <Text 
                className="text-center text-xl text-white font-semibold"
                >
                Sign Up
                </Text>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center">
              <Text className="font-semibold">Already have an account?</Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("Log In")}
                >
                <Text 
                  className="font-bold text-slate-600"
                  > Log In 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  
});
export default WelcomeScreen