import { Alert, Linking } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  function goToTelegram() {
    Linking.openURL("https://t.me/khmell_magic");
  }
  function goToVk() {
    Linking.openURL("https://vk.com/khmell_magic");
  }
  function goToGithub() {
    Linking.openURL("https://github.com/XMEJLb");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfileCard
          onPressTelegram={goToTelegram}
          onPressVk={goToVk}
          onPressGithub={goToGithub}
          firstName={"Den"}
          lastName={"Khmell"}
          age={28}
        />
      </SafeAreaView>
      {/* <AgeCounter /> */}
      {/* <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <ProfileCard firstName="Den" lastName="Khmell" age="18" isOpenToWork />
      </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
