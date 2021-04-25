import React, {useEffect, useState} from 'react';
import {FlatList, Text, SafeAreaView, StyleSheet, View} from 'react-native';

import {Header} from '../components';
import {EnvironmentButton} from '../components';
import {api} from '../services';

interface IEnvironmentProps {
  key: string;
  title: string;
}

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<IEnvironmentProps[]>([]);
  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'todos',
        },
        ...data,
      ]);
    }
    fetchEnvironment();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return <EnvironmentButton title={item.title} />;
          }}
          horizontal
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: '#52665A',
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: '#52665A',
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});

export {PlantSelect};
