import React from "react";
import { View, ScrollView } from "react-native";

import WhatsappStatus from "./src/screens/WhatsappStatus";
import ConfettiButton from "./src/components/Confettibutton";
  // Notice capital B here

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
     
      {/* WhatsApp Status Screen */}
      <WhatsappStatus />
    </ScrollView>
  );
}
