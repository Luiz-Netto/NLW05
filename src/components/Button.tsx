import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>confirmar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32B768',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export {Button};
