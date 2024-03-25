import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export function ProfileCard({ firstName, lastName, age, isOpenToWork }) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>
            {firstName} {lastName}
          </Text>
          <Text>Begginer app dev, Im {age} years old. </Text>
          {isOpenToWork && <Text>Availible for a work</Text>}
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity>
          <FontAwesome name="telegram" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="vk-with-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
