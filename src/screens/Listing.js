import React from "react";
import { ScrollView, View, Image } from "react-native";

export default function Listing() {
  const data= [1, 2, 3, 4,5];
  return (
    <ScrollView horizontal={true} showHorizontalllIndicator={true}>
      <View style={{ flexDirection: "column" }}>
        {data.map((item, index) => (
          <Image
            key={index}
            style={{
              width: 200,
              height: 200,
              marginVerticals: 10,
            }}
            source={require('../../assets/images.png')} // ← correct
          />
        ))}
      </View>
    </ScrollView>
  );
}
