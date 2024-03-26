import { Alert, Linking } from "react-native";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "telegram":
        url = "https://t.me/khmell_magic";
        break;
      case "vk":
        url = "https://vk.com/khmell_magic";
        break;
      case "github":
        url = "https://github.com/XMEJLb";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfileCard
          onPressgoSocialMediaIcon={goToSocialMedia}
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
