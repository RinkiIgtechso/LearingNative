import { Text, StyleSheet, View, ScrollView, SafeAreaView, FlatList, SectionList, TextInput, Switch, Button, Image, KeyboardAvoidingView } from "react-native";
// import PokemonCard from "./components/PokemonCard";
import pokemonList from "./data.json";
import groupData from "./grouped-data.json";
import { StatusBar } from "react-native";
import { useState } from "react";

export default function App(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState({});

  // const [darkMode, setDarkMode] = useState(false);
  // const charmanderData = {
  //   name: "Charmander",
  //   image: require("./assets/charmander.png"),
  //   type: "Fire",
  //   hp: 39,
  //   moves: ["Scratch", "Ember", "Growl", "Leer"],
  //   weakness: ["Water", "Rock"]
  // }

  // const squirleData = {
  //   name: "Squirtle",
  //   image: require("./assets/squirtle.png"),
  //   type: "Water",
  //   hp: 44,
  //   moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  //   weakness: ["Electric", "Grass"]
  // }

  // const builbasaurData = {
  //   name: "Builbasaur",
  //   image: require("./assets/bulbasaur.png"),
  //   type: "Grass",
  //   hp: 45,
  //   moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  //   weakness: ["Electric", "Grass"]
  // }

  // const pikachuData = {
  //   name: "Pikachu",
  //   image: require("./assets/pikachu.png"),
  //   type: "Elect ric",
  //   hp: 35,
  //   moves: ["Quick Attach", "Thunderboll", "Tail Whip", "Growl"],
  //   weakness: ["Ground"]
  // }

  const validateForm = () => {
    let errors = {};
    if(!name) errors.username = 'Username is required';
    if(!password) errors.password = 'Password is required';
    setErrors(errors);

    return Object.keys(errors).length = 0;
  }

  const handleSubmit = () => {
    if(validateForm()){
      console.log('Submitted', name, password);
      setName('');
      setPassword('');
      setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100} behavior="padding">
    {/* when you have nested data then you can go with this */}
      {/* <SectionList 
        sections={groupData}
        renderItem={({item})=>{
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({section})=>{
          return (
            <Text style={{fontSize:20, background: "white", fontWeight: 'bold'}}>{section.type}</Text>
          )
        }}
        ItemSeparatorComponent={()=><View style={{height:13}}></View>}
        SectionSeparatorComponent={()=><View style={{height:13}}></View>}
      /> */}

    {/* -------------- rendering the list in native style ------------ */}
      {/* <View style={styles.scrollView}>
        <FlatList 
          data={pokemonList}
          renderItem={({item}) => {
            // console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height:16}} />}
          ListEmptyComponent={<Text style={{ fontSize:20, textAlign:"center" }}>No items found</Text>}
          ListHeaderComponent={<Text style={{ fontSize: 25, fontWeight:'bold', marginBottom:15 }}>Pokemon List:</Text>}
          ListFooterComponent={<Text style={{ fontSize:19, paddingTop: 10, paddingBottom: 10 }}>End of list</Text>}
          // horizontal
        />
      </View> */}
      {/* --------- not the right way to render the list in native --------- */}
     {/* <ScrollView style={styles.scrollView}>
      {
        pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })
      }
     </ScrollView> */}


      {/* ------------ creating the pokemon card ------------ */}
      {/* <SafeAreaView style={styles.container}>
        <ScrollView>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirleData} />
          <PokemonCard {...builbasaurData} />
          <PokemonCard {...pikachuData} />
        </ScrollView>
      </SafeAreaView> */}

      {/* learning input and form */}
      {/* <TextInput 
        style={styles.input} 
        name={name} 
        onChangeText={setName} 
        placeholder="email@example.com"
        autoCorrect={false}
        autoCapitalize="none"
        // secureTextEntry
        // keyboardType="numbers-and-punctuation"
      />
      <TextInput style={[styles.input, styles.multiline]} placeholder="message" multiline />
      <Text>My name is:    {name}</Text>
      <View style={styles.switchContainer}>
        <Text>{darkMode ? "Dark Mode" :" Light Mode"}</Text>
        <Switch 
          value={darkMode}
          onValueChange={()=>setDarkMode((prev)=>!prev)}
          trackColor={{false:"#767577", true:'black'}}
          thumbColor={'#f4f3f4'}
        />
      </View> */}
      <View style={styles.form}>
        <Image style={styles.image} source={require("./assets/adaptive-icon.png")} />
        <Text style={styles.label} >Username</Text>
        <TextInput style={styles.input} placeholder="Enter username" value={name} onChangeText={setName} />
        {
          error.username ? <Text style={styles.errorText}>{error.username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter Password" value={password} onChangeText={setPassword} secureTextEntry />
        {
          error.password ? <Text style={styles.errorText}>{error.password}</Text> : null
        }
        <Button title='Login' onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems:"center",
    justifyContent:'center',
    marginTop:20,
    paddingTop: StatusBar.currentHeight
    // padding: Platform.OS==="android" ? 25 : 0
  },
  // scrollView: {
  //   paddingHorizontal: 16
  // },
  // card: {
  //   backgroundColor: 'white',
  //   padding: 16,
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   // marginBottom: 16
  // },
  // cardText: {
  //   fontSize: 30
  // }
  // input: {
  //   borderWidth:2,
  //   borderRadius: 8,
  //   // backgroundColor:"red"
  //   height:40,
  //   padding:10,
  //   margin:12,
  // },
  // multiline: {
  //   minHeight: 100,
  //   textAlignVertical:'top'
  // },
  // switchContainer: {
  //   flexDirection:'row',
  //   alignItems:'center',
  //   justifyContent:'space-between',
  //   paddingHorizontal: 10
  // }
  form: {
    backgroundColor:'white',
    padding: 20,
    borderRadius: 10,
    shadowColor:'black',
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowOffset:4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:'bold'
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10
  },
  image:{
    width: 200,
    height:400,
    alignSelf:'center',
    marginBottom:40,
  },
  errorText: {
    fontSize: 14,
    color: "red"
  }
})