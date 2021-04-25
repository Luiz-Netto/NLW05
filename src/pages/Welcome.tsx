import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

import greetingImg from '../img/watering.png';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{'\n'}suas plantas de{'\n'}forma fácil
        </Text>
        <Image style={styles.image} source={greetingImg} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('UserIdentification');
          }}>
          <IconFeather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  title: {
    //Todo: fontFamily: Úbuntu-Regular',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 38,
    color: '#32B768',
    lineHeight: 32,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#32B768',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
    backgroundColor: '#32B768',
  },
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: 32,
  },
});

export {Welcome};
