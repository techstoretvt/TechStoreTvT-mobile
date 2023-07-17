import React from 'react';
// import type {PropsWithChildren} from 'react';
import { Button, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Screens/HomeScreen/Home.screen';
import ShortVideoScreen from './src/Screens/ShortVideoScreen/ShortVideo.screen';
import BlogScreen from './src/Screens/BlogScreen/Blog.screen';
import NotifyScreen from './src/Screens/NotifyScreen/Notify.screen';
import MyAccountScreen from './src/Screens/MyAccountScreen/MyAccount.screen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function HomeScreen({ navigation }: any) {
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details 1"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

function DetailsScreen({ navigation }: any) {
    React.useEffect(() => {
        navigation.setOptions({ tabBarVisible: false });
    }, [navigation]);

    return (
        <View>
            <Text>Details Screen 1</Text>
            <Button
                title="Go home"
                onPress={() => navigation.navigate('ShortVideo')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Blog" component={BlogScreen} />
            <Tab.Screen name="ShortVideo" component={ShortVideoScreen} />
            <Tab.Screen name="Notify" component={NotifyScreen} />
            <Tab.Screen name="My Account" component={MyAccountScreen} />
        </Tab.Navigator>
    );
};

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                // tabBar={() => null}
            >
                <Stack.Screen name="HomeStack" component={BottomTabs} />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
