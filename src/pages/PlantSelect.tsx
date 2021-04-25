import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../components';
import {EnvironmentButton} from '../components';

const PlantSelect = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({item}) => {
            <EnvironmentButton title="cozinha" active />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
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
