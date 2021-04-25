import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import photo from '../img/favicon.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Olá</Text>
        <Text>Luiz</Text>
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
