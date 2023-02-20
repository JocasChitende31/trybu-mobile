import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Signin } from '../Screens/auth/Signin'
import { Signup } from '../Screens/auth/Signup'
import { Start } from '../Screens/Start'

const { Navigator, Screen } = createBottomTabNavigator()

export function AuthRoutes () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none'
        }
      }}
    >
      <Screen
        name="start"
        component={Start}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="signin"
        component={Signin}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="signup"
        component={Signup}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
