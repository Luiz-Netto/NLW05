import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {SvgFromUri} from 'react-native-svg';

import {Button} from '../components';

import waterDropPng from '../img/waterdrop.png';

interface IParams {
  plant: {
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
  };
}

const PlantSave = () => {
  const route = useRoute();
  const {plant} = route.params as IParams;

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDropPng} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.alertLabel}>{plant.frequency}</Text>
        <Button title="Cadastrar Planta" onPress={() => {}} />
      </View>
    </View>
  );
};

export {PlantSave};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  plantName: {
    fontSize: 24,
    color: '#52665A',
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    color: '#52665A',
    fontSize: 17,
    marginTop: 10,
  },
  controller: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBF6FF',
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 17,
    color: '#3D7199',
    textAlign: 'justify',
  },
  alertLabel: {
    textAlign: 'center',
    color: '#52665A',
    fontSize: 12,
    marginBottom: 5,
  },
});
