import { SafeAreaView, StyleSheet, Text, View, Dimensions, useWindowDimensions, SafeAreaView, Platform } from "react-native";
import CustomButton from "./CustomButtons";


export default function Box({children, style}){
    // const windowWidth = useWindowDimensions().width;
    // const windowHeight = useWindowDimensions().height;

    return (
        <SafeAreaView>
            <View style={[styles.box, style]}>
                <Text style={styles.text}>{children}</Text>
                <CustomButton title={'Press Me'} onPress={()=>alert('Pressed!')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor:"#fff",
        padding: 20,
        width:100,
        height: 100,
        position:'relative'
    }, 
    text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
      },
      android: {
        color: "blue",
        fontStyle: "italic",
        fontSize: 50,
      }
    }),
  }
})