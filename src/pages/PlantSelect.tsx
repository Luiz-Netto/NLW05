import React, {useEffect, useState} from 'react';
import {FlatList, Text, SafeAreaView, StyleSheet, View} from 'react-native';

import {Header} from '../components';
import {EnvironmentButton, Load, PlantCardPrimary} from '../components';
import {api} from '../services';

interface IEnvironmentProps {
  key: string;
  title: string;
}

interface IPlantProps {
  key: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<IEnvironmentProps[]>([]);
  const [plants, setPlants] = useState<IPlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<IPlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const handleEnvironmentSelected = (target: string) => {
    setEnvironmentSelected(target);
    if (environmentSelected == 'all') return setFilteredPlants(plants);
    const filtered = plants.filter(plants =>
      plants.environments.includes(environmentSelected),
    );

    setFilteredPlants(filtered);
  };

  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
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

  useEffect(() => {
    async function fetchPlants() {
      const {data} = await api.get('plants?_sort=name&_order=asc');
      setPlants(data);
    }
    fetchPlants();
  }, []);
  if (loading) <Load />;
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
            return (
              <EnvironmentButton
                title={item.title}
                active={item.key === environmentSelected}
                onPress={() => handleEnvironmentSelected(item.key)}
              />
            );
          }}
          horizontal
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({item}) => {
            return <PlantCardPrimary data={item} />;
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});

export {PlantSelect};
