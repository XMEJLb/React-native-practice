import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  header: {
    flexDirection: "row",
  },

  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
});
