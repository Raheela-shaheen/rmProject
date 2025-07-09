import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiButton() {
  const [shoot, setShoot] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Celebrate!" onPress={() => setShoot(true)} />
      {shoot && (
        <ConfettiCannon
          count={200}
          origin={{ x: 200, y: 0 }}
          autoStart={true}
          // fadeOut={true} ❌ Remove this
          // onAnimationEnd={() => setShoot(false)} ❌ Remove this too
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
});
