import { useState } from "react";
import { View,TextInput,StyleSheet,Text,Button } from "react-native"

export default function StatePractice(){


    //business//
  const [email, setEmail] = useState('');


 return  <View style={styles.container}>

         <Text>{email}</Text>
        <TextInput style={styles.input}
         placeholder="enter email"
        onChangeText={setEmail}/>

        <Button title="Login"/>
    </View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
  },
});
