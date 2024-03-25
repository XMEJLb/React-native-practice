import { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { DisplayAge } from "../DisplayAge/DisplayAge";
export function AgeCounter() {
  const [click, setClick] = useState(0);

  function plus() {
    setClick(click + 1);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <TouchableOpacity onPress={plus}>
        <Text style={{ fontSize: 40 }}>Click me</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40 }}>Clicked {click} times</Text>
      <DisplayAge age={click} />
    </View>
  );
}
