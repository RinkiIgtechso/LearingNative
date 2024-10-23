import { Text, View } from "react-native";


export default function Greet({ name }){
    return (
        <View>
            <Text>Hello, {name}</Text>
        {/* <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100} behavior="padding"> */}
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

          refreshing={refresh}
          onRefresh={handleRefresh}
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
      {/* --------- form for login ------ */}
      {/* <View style={styles.form}>
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
      </View> */}
    {/* </KeyboardAvoidingView> */}
        </View>
    )
}