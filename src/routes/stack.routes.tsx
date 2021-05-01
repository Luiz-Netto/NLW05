import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Confirmation,
  PlantSave,
  PlantSelect,
  UserIdentification,
  Welcome,
} from '../pages';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    </stackRoutes.Navigator>
  );
};

export {AppRoutes};
