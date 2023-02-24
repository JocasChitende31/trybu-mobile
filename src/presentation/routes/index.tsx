import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import React from 'react';

const image = require('../../../assets/fundo.jpg')

export function Routes () {
  const { user } = useAuth()

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <NavigationContainer>
        {user?.name ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </ImageBackground>
  )
}