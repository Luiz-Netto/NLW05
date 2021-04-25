import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Button} from '../components';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [isFilled, setIsFilled] = useState<Boolean>(false);
  const [name, setName] = useState<String>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(input: string) {
    setIsFilled(!!input);
    setName(input);
  }
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? '🥰' : '☺️'}</Text>
              <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {borderColor: '#32B768'},
              ]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={styles.footer}>
              <Button
                title="Confirmar"
                onPress={() => navigation.navigate('Confirmation')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  header: {alignItems: 'center'},
  emoji: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#52665A',
    lineHeight: 32,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    color: '#32B768',
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export {UserIdentification};
