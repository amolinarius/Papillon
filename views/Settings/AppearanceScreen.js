import * as React from 'react';
import { View, ScrollView, Pressable, StyleSheet, Image, StatusBar, Platform, Settings, Appearance } from 'react-native';
import { useTheme, Button, Text } from 'react-native-paper';

import { useState, useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';

import ListItem from '../../components/ListItem';
import PapillonIcon from '../../components/PapillonIcon';

import { Maximize } from 'lucide-react-native';

function AppearanceScreen({ navigation }) {
    const theme = useTheme();
    
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{gap: 9, marginTop: 24}}>
                <Text style={styles.ListTitle}>Application</Text>
                <ListItem
                    title="Icône de l'application"
                    subtitle="Changer l'icône de l'application"
                    color="#29947A"
                    left={
                        <PapillonIcon
                            icon={<Maximize size={24} color="#29947A" />}
                            color="#29947A"
                            size={24}
                            small
                        />
                    }
                    onPress={() => navigation.navigate('Icons')}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ListTitle: {
        paddingLeft: 29,
        fontSize: 15,
        fontFamily: 'Papillon-Medium',
        opacity: 0.5,
    },
});

export default AppearanceScreen;