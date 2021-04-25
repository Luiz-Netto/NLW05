import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface IEnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton = ({
  title,
  active = false,
  ...rest
}: IEnvironmentButtonProps) => {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    color: '#32B768',
    backgroundColor: '#DAF2E4',
  },
  text: {
    color: '#52665A',
    fontSize: 16,
  },
  textActive: {
    color: '#2B7A4B',
  },
});

export {EnvironmentButton};
