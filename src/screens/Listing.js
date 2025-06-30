import React from "react";
import { ScrollView, View, Image } from "react-native";

export default function Listing() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3, 4].map((item, index) => (
          <Image
            key={index}
            style={{
              width: 300,
              height: 300,
              marginHorizontal: 10,
            }}
            source={require('../../assets/images.png')} // ← correct
          />
        ))}
      </View>
    </ScrollView>
  );
}
