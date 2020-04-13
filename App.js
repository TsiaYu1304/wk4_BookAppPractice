import React from "react";
import { Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeStackScreen from "./src/screens/HomeStackScreen"

import CustomDrawerContent from "./src/components/CustomDrawerContent"

const Tab = createBottomTabNavigator();

function TabNavigator(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require("./src/img/home.png")
            : require('./src/img/home_gray.png');
        } else if (route.name === 'My Book') {
          iconName = focused 
          ? require("./src/img/mybook.png")
          : require('./src/img/mybook_gray.png');
        }
        else if(route.name === 'Favorites'){
          iconName = focused 
          ? require("./src/img/favorites.png")
          : require('./src/img/favorites_gray.png');

        }
        // You can return any component that you like here!
        return <Image source={iconName} style={{width:30,height:30}} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#00b49f',
      inactiveTintColor: '#818181',
    }}
    >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="My Book" component={HomeStackScreen}/>
        <Tab.Screen name="Favorites" component={HomeStackScreen}/>
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
  <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home"
     drawerContent={props=>CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={TabNavigator} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;

