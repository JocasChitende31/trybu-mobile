import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { Briefcase, House, UserCircle, ClipboardText, Chat } from 'phosphor-react-native';

import { Home } from '../Screens/Home';
import { Profile } from '../Screens/Users/Profile';
import { Services } from '../Screens/Services';
import { Events } from '../Screens/Events';
import { EditProfile } from '../Screens/Users/EditProfile';
import { NewEvents } from '../Screens/Events/NewEvents';
import { EventDetail } from '../Screens/Events/EventDetail';
import { NewService } from '../Screens/Services/NewService';
import { Forums } from '../Screens/forum';
import { NewForumPost } from '../Screens/forum/NewForumPost';
import React from 'react';

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
          padding: 0,
          margin: 0,
          borderTopWidth: 2,
          borderTopColor: '#ECB44A',
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
        name="editprofile"
        component={EditProfile}
        options={{
          tabBarButton: () => null,
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
        name="newservice"
        component={NewService}
        options={{
          tabBarButton: () => null,
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
        name="newevent"
        component={NewEvents}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="eventdetail"
        component={EventDetail}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Screen
        name="forums"
        component={Forums}
        options={{
          tabBarIcon: ({ color }) => <Chat color={color} size={iconSize} />,
          tabBarLabel: '',
        }}
      />
      <Screen
        name="newforumpost"
        component={NewForumPost}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
