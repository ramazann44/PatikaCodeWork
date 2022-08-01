import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import store from './store'

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

import JobsScreen from './src/JobsScreen'
import FavoritedJobsScreen from './src/FavoritedJobsScreen'
import JobDetails from './src/Infos/JobDetails'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function JobStack() {

    return (
      <Stack.Navigator initialRouteName="Jobs">

        <Stack.Screen
          name='Jobs'
          component={JobsScreen}
          options={{
            title: 'Jobs',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='FavoritedJobs'
          component={FavoritedJobsScreen}
          options={{
            title: 'Favorited Jobs',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='JobDetails'
          component={JobDetails}
          options={{
            title: 'Job Details',
          }}
        />

      </Stack.Navigator>
    )

  }

  function FavoritedJobsStack() {

    return (
      <Stack.Navigator initialRouteName="FavoritedJobs">

        <Stack.Screen
          name='Jobs'
          component={JobsScreen}
          options={{
            title: 'Jobs',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='FavoritedJobs'
          component={FavoritedJobsScreen}
          options={{
            title: 'Favorited Jobs',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='JobDetails'
          component={JobDetails}
          options={{
            title: 'Job Detail',
          }}
        />

      </Stack.Navigator>
    )

  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'JobsStack') {
                return <IconMCI
                  name='bag-personal'
                  size={30}
                  color={focused ? 'tomato' : 'gray'} />;
              } else if (route.name === 'FavoritedJobsStack') {
                return <IconMCI name='heart'
                  size={30}
                  color={focused ? 'tomato' : 'gray'} />;
              }

            },
            tabBarActiveTintColor: '#d55',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="JobsStack"
            component={JobStack}
            options={{
              tabBarLabel: 'Jobs',
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 16
              }
            }}
          />
          <Tab.Screen
            name="FavoritedJobsStack"
            component={FavoritedJobsStack}
            options={{
              tabBarLabel: 'Favorited Jobs',
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 16
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}