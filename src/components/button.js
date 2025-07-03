// components/button.js
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonwhite}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    color: "black",
  },
});

export { Button };
