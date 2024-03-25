import { StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
export default function App() {
  return (
    <SafeAreaProvider>
      <AgeCounter />
      {/* <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <ProfileCard firstName="Den" lastName="Khmell" age="18" isOpenToWork />
      </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
