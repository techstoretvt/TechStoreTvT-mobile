/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/home_screen/home_screen';
import ShortVideoScreen from '../../screens/short_video_screen/short_video_screen';
import BlogScreen from '../../screens/blog_screen/blog_screen';
import NotifyScreen from '../../screens/notify_screen/notify_screen';
import MyAccountScreen from '../../screens/my_account_screen/my_account_screen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      // screenOptions={{}}
      backBehavior="history"
      // labeled={false}
      activeColor="red"
      inactiveColor="#ccc"
      // barStyle={{ backgroundColor: 'tomato' }}
      initialRouteName="MyAccount">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon2 name="reader-sharp" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="ShortVideo"
        component={ShortVideoScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="video-camera" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notify"
        component={NotifyScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="bell" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
