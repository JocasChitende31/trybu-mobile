import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PasswordRecover } from '../Screens/auth/PasswordRecover'

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
      />
      <Screen
        name="signin"
        component={Signin}
      />
      <Screen
        name="signup"
        component={Signup}
      />
      <Screen
        name="passwordrecover"
        component={PasswordRecover}
      />
    </Navigator>
  )
}
