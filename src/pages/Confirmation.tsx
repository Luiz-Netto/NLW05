import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Button} from '../components';

const Confirmation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🥰</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Vamos começar a cuidar das suas plantinhas com muito cuidado
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="começar"
          onPress={() => navigation.navigate('PlantSelect')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#52665A',
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 10,
    color: '#52665A',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});

export {Confirmation};
