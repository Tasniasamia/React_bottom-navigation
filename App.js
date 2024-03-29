import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Scanner from './Components/Scanner';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Scanner" component={Scanner}/>
        </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
