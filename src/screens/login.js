import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <ImageBackground
      //source={require("../../assets/A.png")} // => comment this line

      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor="black"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={styles.input}
          secureTextEntry // hides password
        />

        <View style={styles.buttonContainer}>
          <Button title="Login" color="blue" onPress={() => alert('Logged in')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: "pink",
    padding: 20,
    margin: 30,
    borderRadius: 10,
  },
  title: {
    color: "black",
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 5,
    overflow: 'hidden', // ensures button doesn't overflow
  }
});
