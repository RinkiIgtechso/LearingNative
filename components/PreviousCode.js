import { Image, View, ScrollView, Text, Alert, Button, StyleSheet } from 'react-native';
import Greet from './components/Greet';
// import { Button } from 'react-native-web';
const userImge = require("./assets/female_image4.png");

export default function PreviousCode() {

  const showAlert = () => Alert.alert(
    "Invalid Birthdate", 
    "DOB is not correct", 
    [
      {
        text:"Cancel",
        onPress: () =>Alert.alert("Cancel Pressed"),
        style:'cancel'
      },
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
        ),
      },
    ]
  )

  return (
    <View style={{flex: 1, background: 'plum'}}>
      <ScrollView>
        <View style={{padding:30}}>
          {/* <ActivityIndicator size='large' color='midnightblue'   /> */}
          <Greet name={'Rinki'} />
          <Button title='ALert' onPress={showAlert} />
          <Image source={userImge} style={{width: 300, height: 300}} />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tellus ut dolor pharetra fermentum. Nullam facilisis imperdiet fermentum. Nullam vel neque pharetra, tincidunt ipsum vel, elementum ipsum. Sed interdum sit amet sem nec blandit. Sed ut purus vulputate, volutpat mi at, posuere tellus. Nunc mollis lectus ut purus euismod sagittis. Morbi consequat est scelerisque pulvinar rutrum. Nullam viverra nulla arcu, vel malesuada velit fermentum eu. Maecenas tempus blandit dapibus. Donec molestie lacus a ipsum ornare volutpat. Ut nec fringilla libero, at imperdiet ipsum. Quisque aliquam scelerisque dui id scelerisque. Nunc vulputate sit amet ipsum vitae ultricies. Cras pharetra nisl enim, quis lacinia massa vehicula at. 
          </Text>
          <Image source={userImge} style={{width: 300, height: 300}} />
        </View>
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>Style Inheritance <Text style={styles.borderText}>Bold Text</Text> </Text>
            </View>
            <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
                <Text style={{borderRadius:5, backgroundColor:'red'}}>  Lightblue Box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
                <Text>Lightgreen Box</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor:"plum", 
      padding:20,
    },
    darkMode:{
      backgroundColor: 'black',
    },
    darkModeText:{
      color: 'white',
    },
    borderText:{
      fontWeight: 'bold',
    },
    box:{
      // width: "25%",
      // height: "25%",
      width: 250,
      height: 250,
      // padding: 10,
      paddingHorizontal:10,
      paddingVertical:20,
      // backgroundColor: "pink",
      marginVertical:20,
      borderWidth:2,
      borderColor: "purple",
      borderStyle:'solid',
      borderRadius:5
    },
    lightblueBg: {
      backgroundColor: "lightblue"
    },
    lightgreenBg: {
      backgroundColor: "lightgreen"
    },
    boxShadow:{   // for iphone only
      shadowColor: "#333333",   // common in both android and iphone
      shadowOffset:{
        width: 6,
        height: 6
      },
      shadowOpacity: 0.6,
      shadowRadius: 4
    },
    androidShadow:{
      shadowColor: "black",
      elevation: 10
    }
  })