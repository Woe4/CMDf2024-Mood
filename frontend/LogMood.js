import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

export default function LogMoodScreen() {
    const[sliderMood, setSliderMood] = useState(0);

    const handleSlideComplete = (endValue) => {
      setSliderMood(Math.round(endValue));
  
      console.log("slidermood: " + sliderMood);
    };

    return (
      <View style={styles.container}>
        <Text>log your mood</Text>
        <StatusBar style="auto" />
        <Slider 
          style = {{width: 300, height: 40}} 
          minimumValue = {0} 
          maximumValue = {100}
          minimumTrackTintColor = "#900C3F"
          maximumTrackTintColor = "#FFC300"
          onValueChange={handleSlideComplete}
          />
        <Pressable
          style = {styles.button}
          onPress={() => {console.log("mood confirmed")}}>
            <Text>confirm</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDF5AF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slider: {
      flex: 1,
      padding: 20
    },
    button: {
      backgroundColor: "#FF5733",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 12
    },
    text: {
      color: "white",
    }
  });