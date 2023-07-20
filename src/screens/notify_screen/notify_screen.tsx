/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAppSettings } from '../../store/selectors';
import { setTheme } from '../../store/appReducer';

const NotifyScreen = () => {
    const appSettings = useSelector(selectAppSettings);
    const dispatch = useDispatch();

    const handleThemeUpdate = () => {
        // Gọi action creator setTheme để cập nhật theme
        dispatch(setTheme(appSettings.theme === 'dark' ? 'light' : 'dark'));
    };
    return (
        <View>
            <Text>NotifyScreen</Text>
            <View>
                <Text>Theme: {appSettings.theme}</Text>
                <Text>Language: {appSettings.language}</Text>
            </View>
            <View>
                <Button
                    title="Update Theme to Dark"
                    onPress={handleThemeUpdate}
                />
            </View>
        </View>
    );
};

export default NotifyScreen;
