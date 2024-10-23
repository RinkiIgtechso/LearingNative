import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "rinki" })}
      /> */}
        <Button 
            title="Updaten the name"
            onPress={()=> 
                navigation.setParams({
                    name:"RinkiEvolution"
                })
            } 
        />
        <Button 
            title="Go back with data"
            onPress={()=> 
                navigation.navigate("Home", {
                    result:"Data from about"
                })
            } 
        />
        <Text style={styles.text}>Result: {route.params?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});