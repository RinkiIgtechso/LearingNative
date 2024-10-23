import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreens";
import { Pressable, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight:"bold"
        },
        headerRight:()=>(
          <Pressable onPress={()=>alert('Menu button pressed!')}>
            <Text style={{color:"#fff", fontSize: 16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor:''
        }
      }}
      >
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title:"Welcom Home",
          }}
        />
        <Stack.Screen 
          name='About' 
          component={AboutScreen} 
          initialParams={{
            name:"Guest"
          }}
          options={(route)=>({
            title: route.params.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;