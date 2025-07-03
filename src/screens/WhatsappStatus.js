import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

export default function WhatsappStatus() {
  const data = [1, 2, 3, 4, 5, 6];

  const _renderStatus = ({ item }) => {
    return (
      <View style={styles.statusContainer}>
        <Text>Status {item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top-right dots icon */}
      <View style={styles.topRightIcon}>
        <MaterialCommunityIcons name="dots-horizontal" size={30} color="black" />
      </View>

      {/* Row: "Hello WhatsApp" + camera + pencil */}
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Hello WhatsApp</Text>
        <View style={styles.iconRow}>
          <FontAwesome name="camera" size={24} color="black" />
          <View style={{ width: 12 }} />
          <Ionicons name="pencil" size={24} color="black" />
        </View>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={_renderStatus}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative",
  },

  topleftIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  iconRow: {
    flexDirection: "row",
  },

  statusContainer: {
    padding: 10,
    backgroundColor: "pink",
    marginHorizontal: 5,
    borderRadius: 2,
    height:150,
  },
});
