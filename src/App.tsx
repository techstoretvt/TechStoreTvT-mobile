import React from 'react';
// import type {PropsWithChildren} from 'react';
import { Button, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './Tabs/BottomTab/BottomTab';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

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

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
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

export default App;
