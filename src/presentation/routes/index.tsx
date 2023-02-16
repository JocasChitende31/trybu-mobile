import { NavigationContainer } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { Auth } from '../Screens/auth'
import { AppRoutes } from './app.routes'

const image = require('../../../assets/fundo.jpg')

export function Routes () {
  const { user } = useAuth()

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <NavigationContainer>
        {user?.name ? <AppRoutes /> : <Auth />}
      </NavigationContainer>
    </ImageBackground>
  )
}