import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {Header} from '../components';
import {EnvironmentButton, Load, PlantCardPrimary} from '../components';
import {api} from '../services';

interface IEnvironmentProps {
  key: string;
  title: string;
}

interface IPlantProps {
  id: number;
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
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  const handleEnvironmentSelected = (target: string) => {
    setEnvironmentSelected(target);
    if (environmentSelected == 'all') return setFilteredPlants(plants);
    const filtered = plants.filter(plants =>
      plants.environments.includes(environmentSelected),
    );

    setFilteredPlants(filtered);
  };

  async function fetchPlants() {
    const {data} = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );
    if (!data) return setLoading(true);
    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }
    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  const handleSelectedPlant = (plant: IPlantProps) => {
    navigation.navigate('PlantSave', {plant});
  };

  useEffect(() => {
    async function fetchEnvironment() {
      const {data} = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
      if (!data) return;
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
    fetchPlants();
  }, []);
  if (loading) {
    return <Load />;
  }
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
          keyExtractor={item => String(item.key)}
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
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <PlantCardPrimary
                data={item}
                onPress={() => handleSelectedPlant(item)}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) => {
            handleFetchMore(distanceFromEnd);
          }}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color="#32B768" /> : <></>
          }
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
