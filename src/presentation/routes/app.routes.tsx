import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { Briefcase, House, UserCircle, ClipboardText } from 'phosphor-react-native'

import { Signin } from '../Screens/auth/Signin'
import { Home } from '../Screens/Home'
import { Detail } from '../Screens/Detail'
import { Profile } from '../Screens/Profile'
import { Services } from '../Screens/Services'
import { Events } from '../Screens/Events'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes () {
  const { colors, sizes } = useTheme()
  const size = sizes[6]
  const iconSize = 32
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.orange[600],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[16],
          borderTopWidth: 2,
          borderTopColor: colors.yellow[400],
        },
        tabBarItemStyle: {
          position: 'relative',
        },
        tabBarIconStyle: {
          borderRadius: 30
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <UserCircle color={color} size={iconSize} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name="services"
        component={Services}
        options={{
          tabBarIcon: ({ color }) => <Briefcase color={color} size={iconSize} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name="events"
        component={Events}
        options={{
          tabBarIcon: ({ color }) => <ClipboardText color={color} size={iconSize} />,
          tabBarLabel: '',
        }}

      />
      <Screen
        name="detail"
        component={Detail}
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
    </Navigator>
  )
}
