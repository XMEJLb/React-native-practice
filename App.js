import { StyleSheet, Text, View } from "react-native";
import { Profile } from "./components/Profile/Profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={s.box1} />
        <View style={s.box2} />
        <View style={s.box3} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
