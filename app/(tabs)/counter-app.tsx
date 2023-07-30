import EditScreenInfo from "@/components/EditScreenInfo";
import { Platform, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Counter from "../../features/counter/Counter";
import LinkList from "../../components/LearnReduxLinks";

export default function CounterAppScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <LinkList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...(Platform.OS === "web" ? { alignItems: "center" } : {}),
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
