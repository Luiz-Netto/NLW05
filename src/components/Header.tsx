import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import photo from '../img/favicon.png';

const Header = () => {
  const [userName, setuserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setuserName(user || '');
    }
    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Olá</Text>
        <Text>{userName}</Text>
      </View>
      <Image source={photo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 32,
    color: '#52665A',
  },
  userName: {
    fontSize: 32,
    color: '#52665A',
    lineHeight: 40,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export {Header};
