import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import { IconContainer } from "../component/IconContainer";

export default function WhatsappStatus() {
  return (
    <View style={styles.container}>
      {/* Top-right dots icon */}
      <View style={styles.topLeftIcon}>
        <IconContainer
          icon={<MaterialCommunityIcons name="dots-horizontal" size={30} color="black" />}
        />
      </View>

      {/* Row: "Hello WhatsApp" + camera + pencil */}
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Hello WhatsApp</Text>
        <View style={styles.iconRow}>
          <IconContainer icon={<FontAwesome name="camera" size={24} color="black" />} />
          <IconContainer icon={<Ionicons name="pencil" size={24} color="black" />} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },

  topRightIcon: {
    top: 200,   // corrected from "Top"
    right: 40,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconRow: {
    flexDirection: 'row',
    gap: 12,
  },
});
