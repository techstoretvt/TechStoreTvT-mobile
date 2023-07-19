/* eslint-disable */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../../Screens/HomeScreen/Home.screen';
import ShortVideoScreen from '../../Screens/ShortVideoScreen/ShortVideo.screen';
import BlogScreen from '../../Screens/BlogScreen/Blog.screen';
import NotifyScreen from '../../Screens/NotifyScreen/Notify.screen';
import MyAccountScreen from '../../Screens/MyAccountScreen/MyAccount.screen';

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
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Blog"
                component={BlogScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ShortVideo"
                component={ShortVideoScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notify"
                component={NotifyScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="My Account"
                component={MyAccountScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
