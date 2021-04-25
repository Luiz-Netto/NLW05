import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {SvgFromUri} from 'react-native-svg';

interface IPlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary = ({data, ...rest}: IPlantProps) => {
  return (
    <RectButton style={styles.container}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
  text: {color: '#2B7A4B', marginVertical: 16},
});

export {PlantCardPrimary};
