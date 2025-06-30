// screens/counter.js
import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "../screens/button";  // Make sure path is correct

const ranger = 10;
const MIN_COUNT_LIMIT = 10;

export default function Counter() {
  const [count, setCount] = useState(MIN_COUNT_LIMIT);

  function onAddPressed() {
    setCount(count + ranger);
  }

  function onMinusPressed() {
    if (count - ranger < MIN_COUNT_LIMIT) return;
    setCount(count - ranger);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title="+" onPress={onAddPressed} />
        <Text style={styles.counterText}>{count}</Text>
        <Button title="-" onPress={onMinusPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(34, 5, 5)",
  },
  box: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    backgroundColor: "rgb(31, 150, 186)",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 40,
    color: "white",
  },
});
