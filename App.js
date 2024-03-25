import { Alert } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  function hello(name) {
    Alert.alert("Hello! " + name);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfileCard
          onPressTitle={hello}
          firstName={"Den"}
          lastName={"Khmell"}
        />
      </SafeAreaView>
      {/* <AgeCounter /> */}
      {/* <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <ProfileCard firstName="Den" lastName="Khmell" age="18" isOpenToWork />
      </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
